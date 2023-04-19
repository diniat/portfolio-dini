import React from "react";

const SliderCard = ({ subHeader, headerTitle, preview }) => {
  return (
    <article
      className={"z-30 w-[30rem]  shadow-2xl p-7 rounded-2xl min-h-[20vh]"}
    >
      <h5 className={"font-bold text-base"}>{subHeader}</h5>
      <h3 className={"py-10 text-2xl font-bold"}>{headerTitle}</h3>
      {preview && (
        <p className={"pb-7 text-base font-medium whitespace-pre-line"}>
          {preview}
        </p>
      )}
    </article>
  );
};

export default SliderCard;
