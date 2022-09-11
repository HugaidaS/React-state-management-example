import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Recoil from "./pages/Recoil";
import Redux from "./pages/Redux";
import Home from "./pages/Home";
import { Hook } from "./pages/Hook";
import MobX from "./pages/MobX";

function App() {
  return (
    <div className="App">
      <div>
        <BigGreenHeading>React software architecture training</BigGreenHeading>
        <div>
          <ul>
            <li>
              <Link to={"/"} title="Home">
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/react-hook-state-example"}
                title="React hook state example"
              >
                Hook
              </Link>
            </li>
            <li>
              <Link to={"/recoil-example"} title="Recoil example">
                Recoil
              </Link>
            </li>
            <li>
              <Link to={"/redux-example"} title="Redux example">
                Redux
              </Link>
            </li>
            <li>
              <Link to={"/mobx-example"} title="MobX example">
                MobX
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/react-hook-state-example" element={<Hook />} />
        <Route path="/recoil-example" element={<Recoil />} />
        <Route path="/redux-example" element={<Redux />} />
        <Route path="/mobx-example" element={<MobX />} />
      </Routes>
    </div>
  );
}

const BigGreenHeading = styled.h1`
  color: #304411;
`;

export default App;
