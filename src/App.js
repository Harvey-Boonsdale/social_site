import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import View from "./View";
import Add from "./Add";
import MyNav from "./Navbar";

function App() {
  const [update, changeUpdate] = useState([
    { id: 1, userName: "testUserName", userText: "testUserText", likes: 0 },
    { id: 2, userName: "testUserName", userText: "testUserText", likes: 0 },
  ]);

  // This function expects parameter of update
  // Function then adds toAdd to state
  const addUpdate = (toAdd) => {
    const newState = [...update, toAdd];
    localStorage.setItem("list", JSON.stringify(newState));
    changeUpdate(newState);
  };

  let arr = [
    { key: 1, value: 10 },
    { key: 2, value: 10 },
    { key: 3, value: 10 },
    { key: 4, value: 10 },
    { key: 5, value: 10 },
  ];

  let newState = arr.map((obj) => {
    if (obj.key === 2) {
      // if ive founf the object im looking for
      // return a new object based off it, with something changed
      let newObj = { ...obj };
      newObj.value = newObj.value * 2;
      return newObj;
    } else {
      // else return the object unchanged
      return obj;
    }
  });
  console.log(newState);
  // put newState array in state

  // // when the component renders for the first time
  // useEffect(() => {
  //   // retreives list from local storage
  //   const list = localStorage.getItem("list");
  //   // parses list to js
  //   const parsed = JSON.parse(list);
  //   // puts it in storage
  //   changeUpdate(parsed || []);
  // }, []);

  return (
    <Container>
      <MyNav />
      <Routes>
        <Route path="/" index element={<View update={update} />} />
        <Route
          path="/Add"
          index
          element={<Add addUpdateToPassToChild={addUpdate} />}
        />
      </Routes>
    </Container>
  );
}
export default App;
