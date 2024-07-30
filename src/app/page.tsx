"use client";

import Container from "react-bootstrap/Container";
import TransferOptions from "./components/TransferOptions";
import NavigationBar from "./components/NavigationBar";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

export default function Home() {
  const [darkState, setDarkState] = useState(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      return savedMode ? JSON.parse(savedMode) : true;
    }
    return true;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkState));
  }, [darkState]);

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
