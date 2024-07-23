"use client";

import Container from "react-bootstrap/Container";
import TransferOptions from "./components/TransferOptions";
import NavigationBar from "./components/NavigationBar";
import { useState } from "react";
import Footer from "./components/Footer";

export default function Home() {
  const [darkState, setDarkState] = useState(() => {
    if (typeof window !== "undefined") {
      const savedDarkMode = localStorage.getItem("darkMode");
      return savedDarkMode ? JSON.parse(savedDarkMode) : false;
    }

    return true;
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
        <Footer dark={darkState} />
      </Container>
    </>
  );
}