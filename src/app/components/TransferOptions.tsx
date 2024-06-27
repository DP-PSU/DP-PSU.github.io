import { useState } from "react";
import { Button, Card, Container, Modal } from "react-bootstrap";
import SophiaOption from "./SophiaOption";
import TESUOption from "./TESUOption";
import StraighterlineOption from "./StraighterlineOption";
import WestcottOption from "./WestcottOption";

export default function TransferOptions() {
  return (
    <Container>
      <SophiaOption />
      <TESUOption />
      <StraighterlineOption />
      <WestcottOption />
      <Card className="mb-4">
        <Card.Header>Transfer Option #4</Card.Header>
        <Card.Body>
          <Card.Title>CLEP</Card.Title>
          <Card.Text>
            <a href="https://clep.collegeboard.org/">
              College-Level Examination Program (CLEP)
            </a>{" "}
            offers a set of exams that allow you to gain college credit for your
            bachelor&apos;s degree, bypassing the need to take longer courses.
            These CLEP tests encompass various fields such as history and social
            sciences, literature and composition, mathematics and science,
            business, as well as world languages.
            <br />
            <br />
            <strong>
              Good for Foreign Language: Spanish, French, and German
            </strong>
            <br />
            <br />
            <strong>Good for Certain General Education Coursework</strong>
            <br />
            <br />
            <strong>Type: Exam (Pass / Fail) </strong>
          </Card.Text>
          <Button variant="outline-primary">Details</Button>
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Header>Transfer Option #5</Card.Header>
        <Card.Body>
          <Card.Title>DSST Exams</Card.Title>
          <Card.Text>
            {" "}
            <a href="https://getcollegecredit.com/">DSST Exams</a> offer a set
            of exams that allow you to gain college credit for your
            bachelor&apos;s degree, bypassing the need to take longer courses.
            These DSST tests have some more topics than CLEP exams, so they are
            worth looking into. <br />
            <br />
            <strong>
              Good for Fundamentals of Cybersecurity Exam for SRA 221
            </strong>
            <br />
            <br />
            <strong>Good for Certain General Education Coursework</strong>
            <br />
            <br />
            <strong>Type: Exam (Pass / Fail)</strong>
          </Card.Text>
          <Button variant="outline-primary">Details</Button>
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Header>Transfer Option #6</Card.Header>
        <Card.Body>
          <Card.Title>Coursera</Card.Title>
          <Card.Text>
            <a href="https://degreeforum.miraheze.org/wiki/Coursera">
              Coursera
            </a>{" "}
            offers a service that allows students to earn college credit for
            completing their courses. Coursera, provides, certificates and
            badges that can be granted for credit. <br />
            <br />
            <strong></strong>
            <br />
            <br />
            <strong>Good for EE 456, BA XFR100, CMPSC XFR200</strong>
            <br />
            <br />
            <strong>Type: Self-Paced Course (Pass / Fail)</strong>
          </Card.Text>
          <Button variant="outline-primary">Details</Button>
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Header>Transfer Option #7</Card.Header>
        <Card.Body>
          <Card.Title>Study.com</Card.Title>
          <Card.Text>
            <a href="https://study.com/college/index.html">Study.com</a> offers
            a service that allows students to earn college credit for completing
            their courses. Study.com boasts the most courses, however most of
            them are not listed in the Transfer Option tool. <br />
            <br />
            <strong>Good for ENGL 15 </strong>
            <br />
            <br />
            <strong>Type: Self-Paced Course (Pass / Fail)</strong>
          </Card.Text>
          <Button variant="outline-primary">Details</Button>
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Header>Transfer Option #8</Card.Header>
        <Card.Body>
          <Card.Title>Study Hall</Card.Title>
          <Card.Text>
            <a href="https://gostudyhall.com/">Study Hall</a> is a partnership
            between Crash Course, Youtube, and Arizona State University. The
            program offers four courses with instructional support for college
            credit. <br />
            <br />
            <strong>Good for CAS 101N, HIST 11, CMPSC 121</strong>
            <br />
            <br />
            <strong>Good for General Education (Interdomain)</strong>
            <br />
            <br />
            <strong>Type: Instructional (Grade)</strong>
          </Card.Text>
          <Button variant="outline-primary">Details</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
