import React from "react";
import "./AppCont.css";
import { Platforms } from "./Platforms";
import { Aside } from "./Aside.jsx";
import { Games } from "./Games";

export const AppCont = () => {
  return (
    <>
        <Platforms></Platforms>
    <section className="AppCont">
      <div>
        <div style={{ backgroundColor: "black" }}>
          filtros------------------------------------
        </div>
        <Games></Games>
      </div>
      <Aside></Aside>
    </section>
    </>
  );
};
