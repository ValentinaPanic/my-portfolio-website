import React from 'react';

const Layout:React.FC<{children: React.ReactElement[] | React.ReactElement, className: string}> = ({children, className=""}) => {
    return (
        <div className={`${className} z-0 p-4`}>{children}</div>
    )
}

export default Layout;