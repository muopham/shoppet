import React from "react";

const Section = (props) => {
  return <div className="container-fluid my-10 px-3">{props.children}</div>;
};

export const SectionTitle = (props) => {
  return (
    <div className="text-center">
      <p className="text-xl md:text-3xl font-light">{props.children}</p>
    </div>
  );
};

export default Section;
