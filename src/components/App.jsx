import React from "react";
import Dashboard from "./Dashboard";
import NavBar from "./Nav/NavBar.jsx";

export default function App() {
  return (
    <>
      <NavBar />
      {/* Private Routes: DashBoardNavBar */}
      <Dashboard />
      <center>
        <h1>WIREFRAMING IS MERELY A SUGGESTION AND ANYTHING CAN BE CHANGED!</h1>
        <h2>I PROMISE MY FEELINGS WILL NOT BE HURT</h2>
        <h4>maybe a little</h4>
        <h2>NO SERIOUSLY, CHANGES ARE EXPECTED AND ENCOURAGED</h2>
        <h4>I know I am not the best at UI/Design</h4>
        <h4>Comments are also merely suggestions and placeholders for stuff</h4>
        <h4>I did no other work on Saturday</h4>
        <h2>^_^</h2>
      </center>
    </>
  );
}
