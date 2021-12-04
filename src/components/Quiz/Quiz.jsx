import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Quiz.css";

export const Quiz = () => {
  const { id, questionId } = useParams();

  const stringId = id.toString();

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/quiz/${stringId}.json`
    )
      .then((response) => response.json())
      .then((json) => setData(json.questions));
  }, []);
  return (
    <>
      <div className="question">
        <p className="question__number">
          Otázka {parseInt(questionId) + 1} / {data?.length}
        </p>

        <h2 className="question__title">{data && data[questionId].title}</h2>

        <div className="question__content">
          <img
            className="question__image"
            src={data && data[questionId].image}
            alt="Ilustrační obrázek"
          />

          <div className="question__answers">
            <Link
              className="question__answer"
              to={
                parseInt(questionId) + 1 < data?.length
                  ? `/quiz/${stringId}/${parseInt(questionId) + 1}`
                  : "/quiz/evaluation"
              }
            >
              {data && data[questionId].answers[0]}
            </Link>
            <Link
              className="question__answer"
              to={
                parseInt(questionId) + 1 < data?.length
                  ? `/quiz/${stringId}/${parseInt(questionId) + 1}`
                  : "/quiz/evaluation"
              }
            >
              {data && data[questionId].answers[1]}
            </Link>
            <Link
              className="question__answer"
              to={
                parseInt(questionId) + 1 < data?.length
                  ? `/quiz/${stringId}/${parseInt(questionId) + 1}`
                  : "/quiz/evaluation"
              }
            >
              {data && data[questionId].answers[2]}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
