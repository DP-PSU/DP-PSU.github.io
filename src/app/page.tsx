"use client";

import { Container } from "react-bootstrap";
import TransferOptions from "./components/TransferOptions";

export default function Home() {
  return (
    <>
      <Container fluid>
        <h1 className="header-title text-center mb-3 mt-3">
          Cheap PSU Transfer Credit
        </h1>
        <TransferOptions />
      </Container>
    </>
  );
}
