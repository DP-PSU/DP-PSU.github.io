import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import DarkModeButton from "./DarkModeButton";
import { type Dispatch, type SetStateAction } from "react";

export default function NavigationBar({
  dark,
  setDark,
}: {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Navbar
      expand={false}
      data-bs-theme={`${dark ? "dark" : ""}`}
      className={`bg-body-tertiary mb-3`}
    >
      <Container fluid>
        <Navbar.Brand href="/" className="ms-2">
          Cheap PSU Transfer Credit
        </Navbar.Brand>
        <DarkModeButton dark={dark} setDark={setDark} />
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand" />
        <Navbar.Offcanvas
          className={`${dark ? "bg-dark text-light" : " bg-body-tertiary"}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand">
              Helpful Links
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link
                href="https://public.lionpath.psu.edu/psc/CSPRD/EMPLOYEE/SA/c/PE_AD077.PE_AD077_TRN_CRD_T.GBL?Page=PE_AD077_MAIN_SRCH&Action=U"
                target="_blank"
                rel="noreferrer noopener"
              >
                PSU Transfer Credit Tool
              </Nav.Link>
              <NavDropdown
                title="Direct links to Transfer options"
                id="offcanvasNavbarDropdown-expand"
              >
                <NavDropdown.Item
                  href="https://sophia.org"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Sophia Learning
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://www2.tesu.edu/listalltecep.php"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Thomas Edison St University
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://straigherline.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Straighterline
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://westcottcourses.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  WestCott
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://clep.collegeboard.org"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  College Level Examination Program
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://getcollegecredit.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  DSST Exams
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://coursera.org"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Coursera
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://study.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Study.com
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://gostudyhall.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Study Hall
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
