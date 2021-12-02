import React, { useEffect, useState } from "react";
import moncicak from "../../assets/images/quiz-images/moncicak.jpg";
import snehurka from "../../assets/images/quiz-images/snehurka.jpg";
import pivo from "../../assets/images/quiz-images/pivo.jpg";

export const Quizzes = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/quizes.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <div className="quiz-list">
        {data?.map((quiz) => (
          <div className="quiz-item" key={quiz.title}>
            <img className="quiz-item__image" src={quiz.image} alt="Mončičák" />
            <div className="quiz-item__content">
              <h2 className="quiz-item__title">{quiz.title}</h2>
              <p className="quiz-item__questions">{quiz.questions}</p>
              <a className="quiz-item__link" href="#">
                Spustit kvíz
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
