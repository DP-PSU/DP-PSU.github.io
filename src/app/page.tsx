"use client";

import Container from "react-bootstrap/Container";
import TransferOptions from "./components/TransferOptions";
import NavigationBar from "./components/NavigationBar";
import { useState } from "react";

export default function Home() {
  const [darkState, setDarkState] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  return (
    <>
      <Container fluid className={`p-0 ${darkState ? "bg-secondary" : ""}`}>
        <NavigationBar dark={darkState} setDark={setDarkState} />
        <div>
          {/* <h1 className="header-title text-center mb-3 mt-3">
            Cheap PSU Transfer Credit
          </h1> */}
        </div>
        <TransferOptions dark={darkState} />
      </Container>
    </>
  );
}
