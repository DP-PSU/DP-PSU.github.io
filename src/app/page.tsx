"use client";

import Container from "react-bootstrap/Container";
import TransferOptions from "./components/TransferOptions";
import NavigationBar from "./components/NavigationBar";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

export default function Home() {
  const [darkState, setDarkState] = useState(true);
  const [rememberedMode, setRememberedMode] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      setDarkState(savedMode ? JSON.parse(savedMode) : true);
    }
  }, []);

  return (
    <>
      <Container fluid className={`p-0 ${darkState ? "bg-secondary" : ""}`}>
        <NavigationBar dark={darkState} setDark={setDarkState} />
        <TransferOptions dark={darkState} />
        <Footer dark={darkState} />
      </Container>
    </>
  );
}
