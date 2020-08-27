import React from "react";
import Part from "./Parts";

const Content = ({ content }) => {
  return (
    <>
      {content.map((item) => {
        return (
          <Part key={item.id} name={item.name} exercises={item.exercises} />
        );
      })}
    </>
  );
};

export default Content;
