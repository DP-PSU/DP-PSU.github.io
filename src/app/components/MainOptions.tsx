import { Button, Card, Container } from "react-bootstrap";

export default function MainOptions() {
  return (
    <Container>
      <Card>
        <Card.Header>Transfer Credit #1</Card.Header>
        <Card.Body>
          <Card.Title>Sophia Learning</Card.Title>
          <Card.Text>
            <a href="https://www.sophia.org">Sophia Learning</a> is a
            self-paced, open-book online education platform that offers a
            variety of course (mostly general education courses) for credit.
            Courses provided by Sophia are accessible through a montly
            subscription. While you can work on 2 courses simultaneously, there
            are no limits on the amount of courses you can finish within a
            month. Certain courses can be finished in less than a day!
          </Card.Text>
          <Button variant="outline-primary">Details</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>Transfer Credit #2</Card.Header>
        <Card.Body>
          <Card.Title>Thomas Edison State University</Card.Title>
          <Card.Text>
            <p>
              <a href="https://www2.tesu.edu/listalltecep.php">
                Thomas Edison State University (TESU)
              </a>{" "}
              offers a set of exams called the Thomas Edison Credit by
              Examination Program or TECEP that allow you to gain college credit
              for your bachelor&apos;s degree, bypassing the need to take longer
              courses. These tests encompass various fields such as social
              sciences, literature and composition, technology, and business.
            </p>
            <p>
              <strong>Good for Specific Courses Listed Below:</strong>
            </p>
            <p>
              <strong>
                ENGL 15, ENGL 202C, CAS 100A, IST 220, PSYCH 270, SOC 30, BA
                100, CMPSC 100
              </strong>
            </p>
            <p>
              <strong>Type: Exam (Pass / Fail) </strong>
            </p>
          </Card.Text>
          <Button variant="outline-primary">Details</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
