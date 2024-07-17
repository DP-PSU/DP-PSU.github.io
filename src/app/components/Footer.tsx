import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Typography, Link } from "@mui/material";

export default function Footer({ dark }: { dark: boolean }) {
  return (
    <footer
      style={{
        backgroundColor: "#f8f9fa",
        padding: "0.7rem 0",
        marginTop: "auto",
      }}
      className={`${dark ? "bg-dark text-light" : ""} mt-5`}
    >
      <Container>
        <Row>
          <Col>
            <Typography variant="h6" align="center" gutterBottom>
              PSU Transfer Credit Information
            </Typography>
            <Typography variant="body2" align="center" component="p">
              &copy; {new Date().getFullYear()}
            </Typography>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="text-center">
            <Link href="#" color="inherit">
              Top
            </Link>
          </Col>
          <Col md={4} className="text-center">
            <Link
              href="https://public.lionpath.psu.edu/psc/CSPRD/EMPLOYEE/SA/c/PE_AD077.PE_AD077_TRN_CRD_T.GBL?Page=PE_AD077_MAIN_SRCH&Action=U"
              target="_blank"
              rel="noreferrer noopener"
              color="inherit"
            >
              PSU Transfer Credit Tool
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
