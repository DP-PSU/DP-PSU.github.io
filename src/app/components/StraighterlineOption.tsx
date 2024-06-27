import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";

export default function StraighterlineOption() {
  const [visible, setVisible] = useState(false);

  const handleClose = () => setVisible(false);
  const handleVisible = () => setVisible(true);

  return (
    <>
      <Card className="mb-4">
        <Card.Header>Transfer Option #3</Card.Header>
        <Card.Img
          variant="top"
          src="https://www.excelsior.edu/wp-content/uploads/2018/01/logo-straighterline.jpeg"
          alt="StraighterLine image"
          style={{ width: "25%" }}/>
        <Card.Body>
          <Card.Title>StraighterLine</Card.Title>
          <Card.Text>
            <a href="https://imgs.search.brave.com/cxkHu0ko46hNSsbu2z8yf9QApKGoR5tM7ESwIKP5yjU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZXhjZWxzaW9yLmVk/dS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OC8wMS9sb2dvLXN0/cmFpZ2h0ZXJsaW5l/LTMwMHg1NC5qcGVn">
              StraighterLine
            </a>{" "}
            is a self-paced, open-book online education platform that offers a
            variety of course (mostly general education courses) for credit.
            Courses provided by StraighterLine are accessible through a montly
            subscription plus a charge for each course taken. Straighterline
            requires proctoring for a course final exam. <br />
            <br />
            <strong>Good for ENGL 15 and PHYS 250</strong>
            <br />
            <br />
            <strong>Type: Self-Paced Course (Pass / Fail)</strong>
          </Card.Text>
          <Button
            variant="outline-info"
            className="me-3"
            onClick={() => setVisible(true)}
          >
            Details
          </Button>
          <Button
            variant="outline-success"
            onClick={() => alert("Functionality not implemented yet.")}
          >
            Review
          </Button>
        </Card.Body>
      </Card>
      <StraighterlineModal visible={visible} handleClose={handleClose} />
    </>
  );
}

function StraighterlineModal({
  visible,
  handleClose,
}: {
  visible: boolean;
  handleClose: () => void;
}) {
  return (
    <Modal show={visible} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Straighterline details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>Cost</h2>
        <p>
          You have to pay a mentorship fee of $99 no matter what course you
          take. You also have to pay for the course you want to take. If you
          take ENGL 15, it will cost $178. If you take PHYS 250, it should cost
          $247.
        </p>
        <h2>Transfer</h2>
        <p>You can explore other course equivalencies on StraighterLine by:</p>
        <ol>
          <li>Searching Google for Penn State Transfer Option Tool </li>
          <li>Click on the Transfer Option Tool</li>
          <li>Opt for Search by Institution.</li>
          <li>
            Under Institution, enter: American Council on Education (DC):
            100138677.
          </li>
          <li>For Course, enter: OOSL - STRAIGHTERLINE (ALL Courses).</li>
          <li>Finally, click on Search </li>
        </ol>
        <h2>How to Send Transcript</h2>
        <p>
          First, you must send your transcript through Credly. You can create an
          account through credly. In your credly account, you should see your
          badge appear once you accept your badge. You can follow this{" "}
          <a href="https://support.credly.com/hc/en-us/articles/360054195272-How-can-I-send-my-ACE-Transcript">
            link
          </a>{" "}
          for steps on how to send your transcript to admissions@psu.edu. It
          would also be helpful to put your psu email (in case you did not sign
          up with your psu email) and student id number in the custom message to
          ease the transfer process.
        </p>
        <h2>Notes</h2>
        <p>
          Both Thomas Edison University (exam option) and StraighterLine (course
          option) offer ENGL 15. Keep in mind in order to get credit for PHYS
          250, you must take BOTH General Physics 1 and General Physics 1 Lab
          for PHYS 250 credit. Otherwise, you will not get credit for PHYS 250.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
