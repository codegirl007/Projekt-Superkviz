import React from "react";

export const Question = () => {
  return (
    <>
      <div className="question" key={question.title}>
        <p className="question__number">Otázka 1 / 5</p>

        <h2 className="question__title">{question.title}</h2>

        <div className="question__content">
          <img
            className="question__image"
            src={question.image}
            alt="Ilustrační obrázek"
          />

          <div className="question__answers">
            <button className="question__answer">{question.answers[0]}</button>
            <button className="question__answer">{question.answers[1]}</button>
            <button className="question__answer">{question.answers[2]}</button>
          </div>
        </div>
      </div>
    </>
  );
};
