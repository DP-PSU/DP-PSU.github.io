import { Rating } from "@mui/material";
import { Button, Form, FormGroup, Modal } from "react-bootstrap";

export default function ReviewModal({
  option,
  visible,
  handleClose,
  setVisible,
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
}>) {
  return (
    <Modal show={visible} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          Review {option[0].toUpperCase() + option.slice(1)}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(event) => onReviewSubmit(event, option, setVisible)}
          id="review-form"
        >
          <FormGroup controlId="formGroupRating">
            <Form.Label>Your overall rating: </Form.Label>
            <Rating name={`${option}-rating`} precision={0.5} aria-required />
          </FormGroup>
          <FormGroup controlId="formGroupName">
            <Form.Label>
              Name (This is not required if you would like to remain anonymous)
            </Form.Label>
            <Form.Control type="text" name="name" placeholder="Name" />
          </FormGroup>
          <FormGroup controlId="formGroupReview">
            <Form.Label>Your Review</Form.Label>
            <Form.Control
              as="textarea"
              name="review-data"
              placeholder="I thought this was really cool..."
              required
            />
          </FormGroup>
          <Button variant="success" type="submit" id="review-submit">
            Submit Rating
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

const onReviewSubmit = async (
  event: React.FormEvent<HTMLFormElement>,
  option: string,
  setModalVisible: (visible: boolean) => void
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
  if (!rating) return alert("Please provide a rating!");
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
  }
  else {
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
