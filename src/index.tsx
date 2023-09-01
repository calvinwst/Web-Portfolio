import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Resume from "./Components/Resume";
import Project from "./Components/Project";
import ContactForm from "./Components/ContactForm";
import SlideShow from "./Components/SlideShow";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Nav />
    {/* <App /> */}
    <SlideShow />
    <Resume />
    <Project />
    <ContactForm />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
