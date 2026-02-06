import React, { useEffect } from "react";
import * as d3 from "d3";

export const donutData: ChartData[] = [
    {
      name: "Covered",
      value: 39,
      isFocused: true,
      color: {
        bar: "#9581FF",
        box: "#9581FF",
      },
    },
    {
      name: "Not Covered",
      value: 55,
      isFocused: false,
      color: {
        bar: "#BDB0FF",
        box: "#7B61FF33",
      },
    },
  ];
export interface ChartData {
  value: number;
  name: string;
  color: {
    bar: string;
    box: string;
  };
  isFocused?: boolean;
}
interface DonutProps {
  width?: number;
  height?: number;
  data: ChartData[];
  onClick?: () => void;
  backgroundColor: string;
  loading?: boolean;
}

const DonutProgressChart = ({
  data,
  width = 300,
  height = 104,
  backgroundColor,
  loading,
  onClick,
}: DonutProps) => {
  const radius = Math.min(width, height) / 2;
  const legendItemSize = 12;
  const legendSpacing = 40;
  const xLegendText = radius + legendItemSize + 8;
  const legendItemsSpacing = 19;
  const total = data.reduce((acc, cur) => acc + cur.value, 0);
  const getPercentage = (number: number) => {
    const roundNumber = total > 0 ? Math.round((number / total) * 100) : 0;
    return `${roundNumber}%`;
  };

  useEffect(() => {
    const shadowDom = document.querySelector("#shadow-div-id");
    let svg: d3.Selection<SVGGElement, unknown, HTMLElement, unknown>;
    if (shadowDom) {
      const donutChartContainerInShadowDom =
        shadowDom?.shadowRoot?.querySelector("#donutChart");
      d3.select(donutChartContainerInShadowDom).select("svg").remove();
      svg = d3
        .select(donutChartContainerInShadowDom)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${radius}, ${radius})`);
    } else {
      d3.select("svg").remove();
      svg = d3
        .select("#donutChart")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${radius}, ${radius})`);
    }

    const arc = d3
      .arc<d3.PieArcDatum<ChartData>>()
      .innerRadius(radius * 0.8)
      .outerRadius(radius)
      .startAngle(0)
      .endAngle(Math.PI * 2);

    const hoverArc = d3
      .arc<d3.PieArcDatum<ChartData>>()
      .innerRadius(radius * 0.8)
      .outerRadius(radius)
      .cornerRadius(80);

    const pie = d3
      .pie<ChartData>()
      .value((d) => d.value)
      .sort(null);

    const updateArcs = () => {
      svg
        .selectAll<SVGRectElement, d3.PieArcDatum<ChartData>>("path.blend-arc")
        .attr("d", (d) => (d.data.isFocused ? hoverArc(d) : ""))
        .attr("fill", (d) => d.data.color.bar);
    };
    svg
      .selectAll("path.main-arc")
      .data(pie(data))
      .enter()
      .append("path")
      .attr("class", "main-arc")
      .attr("d", arc)
      .attr("fill", backgroundColor);

    svg
      .selectAll("path.blend-arc")
      .data(pie(data))
      .enter()
      .append("path")
      .attr("class", "blend-arc");

    const focusedData = data.filter((point) => point.isFocused);
    const donutStatusLabel = svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .attr("fill", "#8999AF")
      .style("font-size", loading ? "10.5" : "12px")
      .text(loading ? "Analyzing..." : focusedData[0].name);

    const legend = () => {
      const legend = svg
        .append("g")
        .attr("transform", `translate(0, -${height / 3})`);

      data.forEach((item, index) => {
        const legendItem = legend
          .append("g")
          .attr("class", "legend-item")
          .attr(
            "transform",
            () =>
              `translate(${legendSpacing}, ${index * (legendItemsSpacing + legendItemSize)})`,
          );

        legendItem
          .append("rect")
          .attr("class", "legend-item-box")
          .attr("x", radius)
          .style("rx", "2px")
          .attr("width", legendItemSize)
          .attr("height", legendItemSize)
          .attr("fill", item.color.box);

        legendItem
          .append("text")
          .attr("fill", "#F8F7FF")
          .attr("font-size", "12")
          .attr("x", xLegendText)
          .attr("y", 10)
          .text(`${item.name}: ${item.value}`);
      });

      const totalLegend = legend
        .append("g")
        .attr("class", "summary")
        .attr("transform", `translate(${legendSpacing}, ${height / 3})`);

      totalLegend
        .append("text")
        .attr("fill", "#8999AF")
        .style("font-size", "12px")
        .attr("x", radius)
        .attr("y", legendSpacing)
        .text(`Total Identified: ${total}`);

      return svg;
    };

    if (!loading) {
      const legendSvg = legend();

      donutStatusLabel.attr("y", 10);

      const donutPercentageLabel = svg
        .append("text")
        .attr("y", -5)
        .attr("text-anchor", "middle")
        .attr("fill", focusedData[0].color.bar)
        .style("font-size", "20px")
        .style("font-weight", "bold")
        .text(getPercentage(focusedData[0].value));

      const handleElementClick = () => {
        data.forEach((point) => {
          point.isFocused = !point.isFocused;
          if (point.isFocused) {
            point.color.box = point.color.bar;
          } else {
            point.color.box = backgroundColor;
          }
        });

        legendSvg
          .selectAll(".legend-item-box")
          .data(pie(data))
          .attr("fill", (d) => d.data.color.box);

        const focusedData = data.filter((point) => point.isFocused);

        donutStatusLabel.text(focusedData[0].name);
        donutPercentageLabel
          .text(getPercentage(focusedData[0].value))
          .attr("fill", focusedData[0].color.bar);
      };
      if (typeof onClick === "function") {
        onClick();
        const donutChartElement =
          document
            .querySelector("#shadow-div-id")
            ?.shadowRoot?.getElementById("donutChart") ||
          document.getElementById("donutChart");

        donutChartElement?.addEventListener("click", handleElementClick);
        updateArcs();
        return donutChartElement?.removeEventListener(
          "click",
          handleElementClick,
        );
      }
    }

    updateArcs();

    const spinArc = () => {
      svg
        .select(".animate")
        .transition("spin")
        .duration(2000)
        .attrTween("transform", () =>
          d3.interpolateString("rotate(0)", "rotate(360)"),
        )
        .on("end", spinArc);
    };

    const growShrinkArc = () => {
      svg
        .select(".animate")
        .transition("grow")
        .ease(d3.easeCircle)
        .duration(1000)
        .attrTween(
          "d",
          (d) => (_t) =>
            hoverArc
              .innerRadius(radius * 0.85)
              .outerRadius(radius - 3)
              .endAngle(Math.PI * 2 * 0.2)(d),
        )
        .on("end", () => {
          svg
            .select(".animate")
            .transition("grow")
            .ease(d3.easeCircle)
            .duration(250)
            .attrTween(
              "d",
              (d) => (_t) =>
                hoverArc.innerRadius(radius * 0.8).outerRadius(radius)(d),
            )
            .on("end", () => {
              svg
                .select(".animate")
                .transition("grow")
                .ease(d3.easeCircle)
                .duration(750)
                .attrTween(
                  "d",
                  (d) => (_t) =>
                    hoverArc.innerRadius(radius * 0.85).outerRadius(radius - 3)(
                      d,
                    ),
                )
                .on("end", growShrinkArc);
            });
        });
    };
    const loadingLegend = () => {
      const legend = svg
        .append("g")
        .attr("transform", `translate(0, -${height / 3})`);

      data.forEach((item, index) => {
        const legendItem = legend
          .append("g")
          .attr("class", "legend-item-loading")
          .attr(
            "transform",
            () =>
              `translate(${legendSpacing}, ${index * (legendItemsSpacing + legendItemSize)})`,
          );

        legendItem
          .append("rect")
          .attr("class", "legend-item-box-loading")
          .attr("x", radius)
          .style("rx", "2px")
          .attr("width", legendItemSize)
          .attr("height", legendItemSize)
          .attr("fill", item.color.box);

        legendItem
          .append("rect")
          .attr("fill", "#8999AF33")
          .attr("height", legendItemSize)
          .attr("width", "95px")
          .attr("x", xLegendText)
          .attr("rx", "6px");
      });

      const totalLegend = legend
        .append("g")
        .attr("class", "summary-loading")
        .attr("transform", `translate(${legendSpacing}, ${height / 3})`);

      totalLegend
        .append("rect")
        .attr("fill", "#8999AF33")
        .attr("height", legendItemSize)
        .attr("width", "115px")
        .attr("x", radius)
        .attr("y", 30)
        .attr("rx", "6px");

      return svg;
    };
    if (loading) {
      svg.selectAll("path.blend-arc").attr("class", "animate");

      spinArc();
      growShrinkArc();
      loadingLegend();
    }
  }, [loading, data]);

  return <div className="pointer" id="donutChart"></div>;
};
export default DonutProgressChart;
