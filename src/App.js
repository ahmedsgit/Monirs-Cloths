import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/hats" component={HatsPage} />
      {/* <Route path="/topic/:topicId" component={TopicDetail} /> */}
    </div>
  );
}

export default App;
