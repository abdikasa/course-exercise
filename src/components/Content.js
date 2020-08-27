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
      <Part
        name="Total # of Exercises"
        exercises={content.reduce((acc, curr) => {
          return acc + curr.exercises;
        }, 0)}
      ></Part>
    </>
  );
};

export default Content;
