"use client";

import Container from "react-bootstrap/Container";
import TransferOptions from "./components/TransferOptions";
import NavigationBar from "./components/NavigationBar";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import { Toast, ToastContainer } from "react-bootstrap";

export default function Home() {
  const [darkState, setDarkState] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      setDarkState(savedMode ? JSON.parse(savedMode) : true);
    }
  }, []);

  return (
    <>
      <noscript>
        <ToastContainer position="top-center">
          <Toast className="mt-2" bg="danger">
            <Toast.Header>
              <strong className="me-auto">JavaScript is disabled!</strong>
              <small>now</small>
            </Toast.Header>
            <Toast.Body>
              Please enable Javascript to use the full functionality of this
              website. Some features may not work as expected.
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </noscript>
      <Container fluid className={`p-0 ${darkState ? "bg-secondary" : ""}`}>
        <NavigationBar dark={darkState} setDark={setDarkState} />
        <TransferOptions dark={darkState} />
        <Footer dark={darkState} />
      </Container>
    </>
  );
}
