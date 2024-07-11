"use client";

import Container from "react-bootstrap/Container";
import TransferOptions from "./components/TransferOptions";
import NavigationBar from "./components/NavigationBar";

export default function Home() {
  return (
    <>
      <Container fluid className="p-0">
        <NavigationBar />
        <div>
          {/* <h1 className="header-title text-center mb-3 mt-3">
            Cheap PSU Transfer Credit
          </h1> */}
        </div>
        <TransferOptions />
      </Container>
    </>
  );
}
