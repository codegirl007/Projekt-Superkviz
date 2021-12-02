import React from "react";
import { render } from "react-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Intro } from "./pages/Intro/Intro";
import { Quizzes } from "./pages/Quizzes/Quizzes";
import { Rating } from "./pages/Rating/Rating";

const App = () => (
  <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/quizzes" element={<Quizzes />} />
      <Route path="/rating" element={<Rating />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

render(<App />, document.querySelector("#app"));
