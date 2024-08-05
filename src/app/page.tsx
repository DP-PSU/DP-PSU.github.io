"use client";

import Container from "react-bootstrap/Container";
import TransferOptions from "./components/TransferOptions";
import NavigationBar from "./components/NavigationBar";
import { Suspense, useEffect, useState } from "react";
import Footer from "./components/Footer";
import { useSearchParams } from "next/navigation";
import { Toast, ToastContainer } from "react-bootstrap";

function SearchParams({
  showNewWebsiteDialog,
}: Readonly<{
  showNewWebsiteDialog: () => void;
}>) {
  const params = useSearchParams();
  useEffect(() => {
    if (
      params.get("src") == "old_url" &&
      !localStorage.getItem("newWebsiteDialogShown")
    ) {
      showNewWebsiteDialog();
    }
  }, [params, showNewWebsiteDialog]);

  return <></>;
}

export default function Home() {
  const [darkState, setDarkState] = useState(true);

  const [showNewWebsiteToast, setShowNewWebsiteToast] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      setDarkState(savedMode ? JSON.parse(savedMode) : true);
    }
  }, []);

  const showNewWebsiteDialog = () => {
    setShowNewWebsiteToast(true);
    localStorage.setItem("newWebsiteDialogShown", JSON.stringify(true));
  };

  return (
    <>
      <Container fluid className={`p-0 ${darkState ? "bg-secondary" : ""}`}>
        <NavigationBar dark={darkState} setDark={setDarkState} />
        <TransferOptions dark={darkState} />
        <Footer dark={darkState} />
        <ToastContainer position="top-end">
          <Toast
            className="mt-5"
            show={showNewWebsiteToast}
            onClose={() => setShowNewWebsiteToast(false)}
            bg="info"
            autohide
            delay={7500}
          >
            <Toast.Header>
              <strong className="me-auto">Welcome to the new website!</strong>
              <small>now</small>
            </Toast.Header>
            <Toast.Body>
              You can now view and post reviews based on your experience with
              the various options!
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </Container>
      <Suspense>
        <SearchParams showNewWebsiteDialog={showNewWebsiteDialog} />
      </Suspense>
    </>
  );
}
