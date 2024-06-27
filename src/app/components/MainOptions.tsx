import { Button, Card, Container } from "react-bootstrap";

export default function MainOptions() {
  return (
    <Container>
      <Card>
        <Card.Header>Transfer credit #1</Card.Header>
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
    </Container>
  );
}
