import React from "react";
import { Mech } from "./components/Mech";
import "./components/common.css"
import { Civil } from "./components/Civil";
import { Elec } from "./components/Elec";
import { Comps } from "./components/Comps";
import { Auto } from "./components/Auto";
import { Entc } from "./components/Entc";


function App() {
  return (
   <div className="main">
    <Mech />
    <Civil />
    <Elec />
    <Comps />
    <Auto />
    <Entc />
   </div>
    );
}

export default App;
