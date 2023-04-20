import React from "react";

const SliderCard = ({ subHeader, headerTitle, description }) => {
  return (
    <article
      className={"z-30 w-[30rem]  shadow-2xl p-7 rounded-2xl min-h-[50vh]"}
    >
      <h5 className={"font-bold text-base"}>{subHeader}</h5>
      <h3 className={"py-10 text-2xl font-bold"}>{headerTitle}</h3>
      {description && (
        <p className={"pb-7 text-base font-medium whitespace-pre-line"}>
          {description}
        </p>
      )}
    </article>
  );
};

export default SliderCard;
