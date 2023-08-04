import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  // const [number, setNumber] = useState<number | string>(5);

  // const changeNumber = () => {
  //   setNumber("10");
  // };

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Ajala Jingo",
      age: 35,
      url: "data:image/jpeg;base64,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",
      note: "Minister of Travels",
    },
  ]);

  return (
    <div className="App">
      <h1>Appoint New Ministers</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
