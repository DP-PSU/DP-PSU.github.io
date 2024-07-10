import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import ReviewModal from "./ReviewModal";

export default function CourseraOption() {
  const [visible, setVisible] = useState(false);
  const [reviewVisible, setReviewVisible] = useState(false);

  const handleClose = () => setVisible(false);
  const handleVisible = () => setVisible(true);
  const handleReviewClose = () => setReviewVisible(false);

  return (
    <>
      <Card className="mb-4">
        <Card.Header>Transfer Option #6</Card.Header>
        <Card.Img
          variant="top"
          src="https://imgs.search.brave.com/8nNisAp-P6_NDncU8UQKaaU5jCFzmHRmqQ0BBuj0x-A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk3L0NvdXJzZXJh/LUxvZ29fNjAweDYw/MC5zdmc.svg"
          alt="Coursera Image"
          style={{ width: "10%" }}
        />
        <Card.Body>
          <Card.Title>Coursera</Card.Title>
          <Card.Text>
            <a href="https://degreeforum.miraheze.org/wiki/Coursera">
              Coursera
            </a>{" "}
            offers a service that allows students to earn college credit for
            completing their courses. Coursera, provides, certificates and
            badges that can be granted for credit.
            <br />
            <br />
            <strong>Good for EE 456, BA XFR100, CMPSC XFR200</strong>
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
            onClick={() => setReviewVisible(true)}
          >
            Rate or Review this option
          </Button>
        </Card.Body>
      </Card>
      <CourseraModal visible={visible} handleClose={handleClose} />
      <ReviewModal
        option="coursera"
        visible={reviewVisible}
        handleClose={handleReviewClose}
        setVisible={setReviewVisible}
      />
    </>
  );
}

function CourseraModal({
  visible,
  handleClose,
}: {
  visible: boolean;
  handleClose: () => void;
}) {
  return (
    <Modal show={visible} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Coursera details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>Cost</h2>
        <p>
          Coursera plan&apos;s costs around $50 per month. However, many of the
          coursework, unless you work fast, take 2 to 3 months.{" "}
        </p>
        <h2>Transfer</h2>
        <p>
          You can explore other course equivalencies on Coursera courses by:
        </p>
        <ol>
          <li>Searching Google for Penn State Transfer Credit Tool </li>
          <li>Click on the Transfer Credit Tool</li>
          <li>Opt for Search by Institution.</li>
          <li>
            Under Institution, enter: American Council on Education (DC):
            100138677.
          </li>
          <li>
            For Course, enter: GOOG - GOOGLE (ALL Courses) or DLAI - DEEP
            LEARNING SPECIALIZATION (ALL Courses).
          </li>
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
          The Deep Learning Specialization offers EE 456 - Intro to Neural
          Networks. This course is great for any majors in the school of EECS
          (counts as an elective) and perhaps any other engineering major. The
          Google certificates can be used to fufill department list (free
          credits) for some majors.{" "}
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
