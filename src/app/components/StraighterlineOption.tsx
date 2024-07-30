import { useEffect, useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import ReviewModal from "./ReviewModal";
import ViewRatingsModal from "./ViewRatingsModal";

export default function StraighterlineOption({
  darkMode,
}: Readonly<{
  darkMode: boolean;
}>) {
  const [visible, setVisible] = useState(false);
  const [reviewVisible, setReviewVisible] = useState(false);

  const handleClose = () => setVisible(false);
  const handleReviewClose = () => setReviewVisible(false);

  const [ratingsVisible, setRatingsVisible] = useState(false);
  const handleRatingsClose = () => setRatingsVisible(false);

  useEffect(() => {
    const modalContent = document.querySelector(
      ".modal-content"
    ) as HTMLDivElement | null;
    if (darkMode && modalContent) {
      modalContent.style.backgroundColor = " #d3d3d3";
    }
  }, [darkMode, visible]);

  return (
    <>
      <Card className={`mb-4 ${darkMode ? "bg-dark text-light" : ""}`}>
        <Card.Header>Transfer Option #3</Card.Header>
        <Card.Img
          variant="top"
          src="https://www.excelsior.edu/wp-content/uploads/2018/01/logo-straighterline.jpeg"
          alt="StraighterLine image"
          style={{ width: "25%" }}
          className="mt-2 ms-2"
        />
        <Card.Body>
          <Card.Title>StraighterLine</Card.Title>
          <Card.Text>
            <a
              target="blank_"
              rel="noreferrer noopener"
              href="https://www.straighterline.com/"
            >
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
            className="me-2"
            onClick={() => setVisible(true)}
          >
            Details
          </Button>
          <Button
            variant="outline-primary"
            className="me-2"
            onClick={() => setRatingsVisible(true)}
          >
            View Ratings
          </Button>
          <Button
            variant="outline-success"
            onClick={() => setReviewVisible(true)}
          >
            Rate or review this option
          </Button>
        </Card.Body>
      </Card>
      <StraighterlineModal visible={visible} handleClose={handleClose} />
      <ViewRatingsModal
        option="straighterline"
        visible={ratingsVisible}
        handleClose={handleRatingsClose}
        setVisible={setRatingsVisible}
        darkMode={darkMode}
      />
      <ReviewModal
        option="straighterline"
        visible={reviewVisible}
        handleClose={handleReviewClose}
        setVisible={setReviewVisible}
        darkMode={darkMode}
      />
    </>
  );
}

function StraighterlineModal({
  visible,
  handleClose,
}: Readonly<{
  visible: boolean;
  handleClose: () => void;
}>) {
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
          <a
            target="blank_"
            rel="noreferrer noopener"
            href="https://support.credly.com/hc/en-us/articles/360054195272-How-can-I-send-my-ACE-Transcript"
          >
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
