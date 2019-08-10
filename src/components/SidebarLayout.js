import React from "react";

const SidebarLayout = props => {
  const size = props.config && props.config.size;
  const dir = props.config && props.config.dir;
  return (
    <>
      <div className="sidebar-layout inner-wrapper">{props.children}</div>
      <style jsx>
        {`
          aside {
            width: ${size}%;
            order: ${dir === "rtl" ? 1 : 2};
          }
          main {
            width: ${100 - size}%;
            order: ${dir === "rtl" ? 2 : 1};
          }
        `}
      </style>
    </>
  );
};

export default SidebarLayout;
