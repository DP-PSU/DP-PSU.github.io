import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import ReviewModal from "./ReviewModal";
import ViewRatingsModal from "./ViewRatingsModal";

export default function StudyhallOption() {
  const [visible, setVisible] = useState(false);
  const [reviewVisible, setReviewVisible] = useState(false);

  const handleClose = () => setVisible(false);
  const handleVisible = () => setVisible(true);
  const handleReviewClose = () => setReviewVisible(false);

  const [ratingsVisible, setRatingsVisible] = useState(false);
  const handleRatingsClose = () => setRatingsVisible(false);

  return (
    <>
      <Card className="mb-4">
        <Card.Header>Transfer Option #8</Card.Header>
        <Card.Img
          variant="top"
          src="https://gostudyhall.com/images/landingNavbar/SH-Character-AvatarQuote.svg"
          alt="Study Hall Image"
          style={{ width: "15%" }}
        />
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
            Rate or Review this option
          </Button>
        </Card.Body>
      </Card>
      <StudyhallModal visible={visible} handleClose={handleClose} />
      <ViewRatingsModal
        option="studyhall"
        visible={ratingsVisible}
        handleClose={handleRatingsClose}
        setVisible={setRatingsVisible}
      />
      <ReviewModal
        option="studyhall"
        visible={reviewVisible}
        handleClose={handleReviewClose}
        setVisible={setReviewVisible}
      />
    </>
  );
}

function StudyhallModal({
  visible,
  handleClose,
}: {
  visible: boolean;
  handleClose: () => void;
}) {
  return (
    <Modal show={visible} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Study.com details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>Cost</h2>
        <p>
          Arizona State University&apos;s study hall costs $425 in total. It
          costs $25 to join the course. Once you are happy with the grade you
          recieve, you can opt in to recieve college credit for $400. This is
          great opportunity if you need instructional (teacher) accountability
          for completing a course. However, unless you need the specific course,
          I would recommend the other credit opportunities I mentioned above.
          ASU is currently adding more Study Hall courses, so
        </p>
        <h2>Transfer</h2>
        <ol>
          <li>Searching Google for Penn State Transfer Credit Tool </li>
          <li>Click on the Transfer Credit Tool</li>
          <li>Opt for Search by Institution.</li>
          <li>Under Institution, enter: Arizona State University.</li>
          <li>For Course, enter the Arizona State University Course.</li>
          <li>Finally, click on Search </li>
        </ol>
        <h2>Notes</h2>
        <p>
          For the COM course, it says COM 100 transfers as CAS 101 in the tool.
          Ignore the missing suffix. The bulletin states it is in fact CAS 101N.
          Also keep in mind, if you choose this, due dates will be in Arizona
          time rather than Pennsylvania time.
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
