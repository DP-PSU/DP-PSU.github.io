"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export default function NotFound() {
  const [redirCountdown, setRedirCountdown] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setRedirCountdown((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      window.location.href = "/";
    }, redirCountdown * 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [redirCountdown]);

  return (
    <>
      <title>404 - Page Not Found</title>
      <Container
        fluid
        className="d-flex flex-column justify-content-center align-items-center vh-100"
      >
        <h1 className="text-center">
          <span style={{ color: "red" }}>404</span> |{" "}
          <span style={{ fontSize: "1.6rem", fontWeight: "bold" }}>
            Page Not Found
          </span>
        </h1>
        <small className="text-center">
          You will be redirected to the{" "}
          <Link href="/" className="link-info">
            home page
          </Link>{" "}
          in {redirCountdown} seconds.{redirCountdown <= 4 ? "." : ""}
          {redirCountdown <= 3 ? "." : ""}
          {redirCountdown <= 2 ? "." : ""}
        </small>
      </Container>
    </>
  );
}
