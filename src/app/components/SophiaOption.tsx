import { Rating } from "@mui/material";
import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import ReviewModal from "./ReviewModal";

export default function SophiaOption() {
  const [visible, setVisible] = useState(false);
  const [reviewVisible, setReviewVisible] = useState(false);

  const handleClose = () => setVisible(false);
  const handleVisible = () => setVisible(true);
  const handleReviewClose = () => setReviewVisible(false);

  return (
    <>
      <Card className="mb-4">
        <Card.Header>Transfer Option #1</Card.Header>{" "}
        <Card.Img
          variant="top"
          src="https://images.squarespace-cdn.com/content/v1/5bec669f9f877016e7212b2d/436820c3-96ed-42f3-a35b-0ae4deaf227b/Sophia+Learning+Logo"
          alt="Sophia Learning image"
          style={{ width: "25%" }}
        />
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
            <br />
            <br />
            <strong>Good for Almost All Gen Ed Categories:</strong>
            <br />
            <br />
            <strong>Type: Self-Paced (Pass / Fail)</strong>
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
      <SophiaModal visible={visible} handleClose={handleClose} />
      <ReviewModal
        option="sophia"
        visible={reviewVisible}
        handleClose={handleReviewClose}
      />
    </>
  );
}

function SophiaModal({
  visible,
  handleClose,
}: {
  visible: boolean;
  handleClose: () => void;
}) {
  return (
    <Modal show={visible} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Sophia Learning details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>Cost</h2>
        <p>
          The Sophia subscription costs $99 per month. However, the platform
          frequently runs promotions at the start of each month for a discounted
          rate off your subscription for the first month. Also, since there is
          no limit to the amount of courses you take in a month, you should work
          through the coursework when you have a month free. For current PSU
          students, this most likely will occur during your winter or summer
          break.{" "}
        </p>
        <h2>Genral Education Courses</h2>
        <p>
          <strong>Quantification (GQ):</strong> MATH 140, STAT 100
        </p>
        <p>
          <strong>Arts (GA): </strong>ARTH 111, ARTH 112, GD XFRGA
        </p>
        <p>
          <strong>Humanities (GH):</strong>HIST 20, HIST 21, PHIL 10, PHIL 3,
          PHIL XFRGH0, ENGL XFRGH
        </p>
        <p>
          <strong>Social Science (GS): </strong> SOC 1, PLSC 1, PSYCH 100, ECON
          104, ECON GS0
        </p>
        <p>
          <strong>Naturial Science (GN): </strong> BIOL 161, MICRB 106, BISC 4,
          CHEM 101, ENVSC XFRGN0
        </p>
        <p>
          <strong>Health & Wellness (GHW): </strong>NUTR XFRGHA
        </p>
        <h2>Touchstone</h2>
        <p>
          To efficently progress through the coursework, you should avoid taking
          courses with Touchstones. However, for some requirements, it is
          inevitable to take certain coursework. A Touchstone is an assignment
          presented in essay format that must be submitted for grading by an
          instructor. Since course with Touchstones may take a week to grade, it
          cuts down on your time to accomplish as many courses as you can in a
          month. To complete certain gen ed requirements, it may be unavoidable
          to take a course with a Touchstone.{" "}
        </p>
        <h2>Transfer</h2>
        <p>You can explore other course equivalencies on Sophia by:</p>
        <ol>
          <li>Searching Google for Penn State Transfer Option Tool </li>
          <li>Click on the Transfer Option Tool</li>
          <li>Opt for Search by Institution.</li>
          <li>
            Under Institution, enter: American Council on Education (DC):
            100138677.
          </li>
          <li>For Course, enter: SOPH - SOPHIA LEARNING (ALL Courses).</li>
          <li>Finally, click on Search </li>
        </ol>
        <h2>How to Send Transcript</h2>
        <p>
          First, you can not send a transcript through Sophia directly with
          Parchment, you must send it through Credly. You can create an account
          through credly. Once you finish your Sophia course, you have to click
          &quot;Get Your Badge.&quot; In your credly account, you should see
          your badge appear. You can follow this{" "}
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
          {" "}
          Although the Intro To Nutrition courses transfers as a GHA in the tool
          (not a GHW), it does in fact transfer as a GHW that can satisfy the
          GHW 3 credit (not interdomain) requirement. Although the
          macroeconomics Sophia course transfers properly as ECON 104, the
          microeconomics Sophia course does not. Keep this in mind if your major
          requires ECON 102 or ECON 104 or both. The Spanish foreign language
          courses transfer as SPAN XFR000, a 3 credit course - not as SPAN 1,
          SPAN 2 etc. New Sophia courses will not show up on the Transfer Option
          tool. Thus, for these courses it is especially important to talk to
          your advisor to see if they transfer as intended before taking the
          course If you need an interdomain, you can try to petition, with prior
          approval (talk to your advisor), environmental science as an
          interdomain and argue it is both a social science and a natural
          science. Note that petitioning for an interdomain only works for an
          XFR course. With clever petitioning for interdomain coursework, it may
          be possible to finish your core general education requirements with
          Sophia Learning.
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
