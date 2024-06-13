import React from "react";
import "./App.css";
import AnimationPage from "./components/AnimationPage";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import AnimationDesignPage from "./components/courses/AnimationDesignPage";
import VFXPage from "./components/courses/VFXPage";
import GamingPage from "./components/courses/GamingPage";
import WebGraphicPage from "./components/courses/WebGraphicPage";
import ShortTermSpecializedPage from "./components/courses/ShortTermSpecializedPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* { <HomePage/>}
      {<AnimationPage/>}  */}
      {/* <AnimationDesignPage/> */}
      {/* <VFXPage/> */}
      {/* <GamingPage/> */}
      {/* <WebGraphicPage /> */}
      <ShortTermSpecializedPage />
    </div>
  );
}

export default App;
