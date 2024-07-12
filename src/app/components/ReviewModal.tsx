import {
  Dialog,
  DialogContent,
  DialogTitle,
  Rating,
  Button as MaterialUIButton,
  DialogActions,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, Modal, Row } from "react-bootstrap";
import { optionToTitle } from "./TransferOptions";

export default function ReviewModal({
  option,
  visible,
  handleClose,
  setVisible,
  darkMode,
}: Readonly<{
  option:
    | "sophia"
    | "tesu"
    | "straighterline"
    | "westcott"
    | "clep"
    | "dsst"
    | "coursera"
    | "studycom"
    | "studyhall";
  visible: boolean;
  handleClose: () => void;
  setVisible: (visible: boolean) => void;
  darkMode: boolean;
}>) {
  const [noRatingVisible, setNoRatingVisible] = useState(false);

  useEffect(() => {
    const modalContent = document.querySelector(
      ".modal-content"
    ) as HTMLDivElement | null;
    if (darkMode && modalContent) {
      modalContent.style.backgroundColor = " #d3d3d3";
    }
  }, [darkMode, visible]);

  return (
    <Modal show={visible} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Review {optionToTitle[option]}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(event) =>
            onReviewSubmit(event, option, setVisible, setNoRatingVisible)
          }
          id="review-form"
        >
          <Row className="justify-content-center">
            <Col xs={12} sm={6} md={4}>
              <FormGroup controlId="formGroupRating" as={Col}>
                <Form.Label>
                  Overall Rating
                  <span style={{ color: "red" }} className="mt-2 ms-1">
                    *
                  </span>
                </Form.Label>
                <Rating
                  name={`${option}-rating`}
                  precision={0.5}
                  aria-required
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup controlId="formGroupName" as={Col}>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" className="mb-3" />
          </FormGroup>
          <FormGroup controlId="formGroupReview">
            <Form.Label className="mt-2">Your Review</Form.Label>
            <Form.Control
              as="textarea"
              name="review-data"
              placeholder="I thought this was really cool..."
              maxLength={500}
            />
          </FormGroup>
          <Button
            variant="success"
            type="submit"
            id="review-submit"
            className="w-100 mt-4"
          >
            Submit Rating
          </Button>
        </Form>
      </Modal.Body>
      <Dialog open={noRatingVisible}>
        <DialogTitle>Rating Required</DialogTitle>
        <DialogContent>
          You must provide a rating to submit a review.
        </DialogContent>
        <DialogActions>
          <MaterialUIButton onClick={() => setNoRatingVisible(false)}>
            Close
          </MaterialUIButton>
        </DialogActions>
      </Dialog>
    </Modal>
  );
}

const onReviewSubmit = async (
  event: React.FormEvent<HTMLFormElement>,
  option: string,
  setModalVisible: (visible: boolean) => void,
  setNoRatingVisible: React.Dispatch<React.SetStateAction<boolean>>
) => {
  event.preventDefault();

  (
    event.currentTarget.querySelector('button[type="submit"]') as HTMLElement
  ).innerText = "Submitting review...";
  (
    event.currentTarget.querySelector('button[type="submit"]') as HTMLElement
  ).setAttribute("disabled", "true");

  const formData = new FormData(event.currentTarget);

  const rating = formData.get(`${option}-rating`) as string;
  if (!rating) {
    document.getElementById("review-submit")!.innerText = "Submit Rating";
    document.getElementById("review-submit")!.removeAttribute("disabled");
    return setNoRatingVisible(true);
  }
  const name = formData.get("name") as string;
  const review = formData.get("review-data") as string;

  const reviewReq = await fetch("/api/reviews/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ option, name, rating, review }),
  });

  const reviewButton = document.getElementById("review-submit")!;

  if (reviewReq.status == 200) {
    reviewButton.innerText = "Review submitted.";
    (document.getElementById("review-form") as HTMLFormElement)!.reset();

    await new Promise((r) => setTimeout(r, 1000));

    setModalVisible(false);
  } else if (reviewReq.status == 400) {
    reviewButton.classList.remove("btn-success");
    reviewButton.classList.add("btn-danger");
    reviewButton.innerText = "Review contains spam, profanity, or toxicity.";

    await new Promise((r) => setTimeout(r, 2000));

    reviewButton.innerText = "Submit Rating";
    reviewButton.classList.remove("btn-danger");
    reviewButton.classList.add("btn-success");
  } else {
    reviewButton.classList.remove("btn-success");
    reviewButton.classList.add("btn-danger");
    reviewButton.innerText = "Error submitting review.";

    await new Promise((r) => setTimeout(r, 2000));

    reviewButton.innerText = "Submit Rating";
    reviewButton.classList.remove("btn-danger");
    reviewButton.classList.add("btn-success");
  }

  reviewButton.removeAttribute("disabled");
};
