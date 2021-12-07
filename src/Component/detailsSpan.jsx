import React from "react";

const detailsSpan = ({ children,title,className }) => {
  return (
    <span>
      <span className={className}>{title}</span>
      {children}
    </span>
  );
};

export default detailsSpan;
