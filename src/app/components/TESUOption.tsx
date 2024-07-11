import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import ReviewModal from "./ReviewModal";
import ViewRatingsModal from "./ViewRatingsModal";

export default function TESUOption() {
  const [visible, setVisible] = useState(false);
  const [reviewVisible, setReviewVisible] = useState(false);

  const handleClose = () => setVisible(false);
  const handleReviewClose = () => setReviewVisible(false);

  const [ratingsVisible, setRatingsVisible] = useState(false);
  const handleRatingsClose = () => setRatingsVisible(false);

  return (
    <>
      <Card className="mb-4">
        <Card.Header>Transfer Option #2</Card.Header>
        <Card.Img
          variant="top"
          src="https://study.com/images/company/partnersPage/tesu-logo-color.png"
          alt="TESU image"
          style={{ width: "25%" }}
          className="mt-2 ms-2"
        />
        <Card.Body>
          <Card.Title>Thomas Edison State University</Card.Title>
          <Card.Text>
            <a
              target="blank_"
              rel="noreferrer noopener"
              href="https://www2.tesu.edu/listalltecep.php"
            >
              Thomas Edison State University (TESU)
            </a>{" "}
            offers a set of exams called the Thomas Edison Credit by Examination
            Program or TECEP that allow you to gain college credit for your
            bachelor&apos;s degree, bypassing the need to take longer courses.
            These tests encompass various fields such as social sciences,
            literature and composition, technology, and business.
            <br />
            <br />
            <strong>Good for Specific Courses Listed Below:</strong>
            <br />
            <br />
            <strong>
              ENGL 15, ENGL 202C, CAS 100A, IST 220, PSYCH 270, SOC 30, BA 100,
              CMPSC 100
            </strong>
            <br />
            <br />
            <strong>Type: Exam (Pass / Fail) </strong>
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
      <TESUModal visible={visible} handleClose={handleClose} />
      <ViewRatingsModal
        option="tesu"
        visible={ratingsVisible}
        handleClose={handleRatingsClose}
        setVisible={setRatingsVisible}
      />
      <ReviewModal
        option="tesu"
        visible={reviewVisible}
        handleClose={handleReviewClose}
        setVisible={setReviewVisible}
      />
    </>
  );
}

function TESUModal({
  visible,
  handleClose,
}: {
  visible: boolean;
  handleClose: () => void;
}) {
  return (
    <Modal show={visible} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>TESU details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>Cost</h2>
        <p>
          {" "}
          TECEP exams are administered year-round on a flexible schedule. Lower
          Level TECEP Exams (1000-2000) cost $52 per credit or $156 for a 3
          credit course. Upper Level TECEP Exams (3000-4000) (tests for IST 220
          and PSYCH 270 only) cost $77 per credit or $231 for a 3 credit course.
          In order to take the TECEP exam, you must apply to the university as a
          non-matriculated student interested in taking TECEP exams only. The
          application fee (a one time fee) is $50.{" "}
        </p>
        <h2>Transfer</h2>
        <p>
          You can explore other course equivalencies on Thomas Edison University
          by:
        </p>
        <ol>
          <li>Searching Google for Penn State Transfer Option Tool </li>
          <li>Click on the Transfer Option Tool</li>
          <li>Opt for Search by Institution.</li>
          <li>
            Under Institution, enter: Thomas Edison State Univ (NJ): 100122872
          </li>
          <li>For Course, enter the Thomas Edison State course.</li>
          <li>Finally, click on Search </li>
        </ol>
        <h2>Notes</h2>
        <p>
          Penn State has a transfer policy as follows &quot;Only courses in
          which a grade of &apos;C&apos; (2.0) or higher is earned will be
          considered for transfer. Course work completed on a Pass/Fail or
          Satisfactory/Unsatisfactory basis typically will not be transferred,
          unless the transcript indicates the alternative grade is equivalent to
          &apos;C&apos; (2.0) or higher.&quot; Therefore, you may have to tell
          admissions that TESU indicated the alternative grade given is
          equivalent to &apos;C&apos; (2.0) or higher when submitting your
          transcript. You can view this{" "}
          <a
            target="blank_"
            rel="noreferrer noopener"
            href="https://www.degreeforum.net/mybb/Thread-Technical-Writing-TECEP-My-Experience?pid=415185#pid415185"
          >
            link
          </a>{" "}
          for more information.{" "}
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
