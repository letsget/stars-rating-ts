import React from "react";
import "../App.css";
import StarsRating from "../components/StarsRating";

const STARS_COUNT: number = 4;

const App = () => <StarsRating count={STARS_COUNT} />;

export default App;
