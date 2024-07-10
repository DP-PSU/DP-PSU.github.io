import { Rating } from "@mui/material";
import { Button, Form, FormGroup, Modal } from "react-bootstrap";

export default function ReviewModal({
  option,
  visible,
  handleClose,
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
}>) {
  return (
    <Modal show={visible} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          Review {option[0].toUpperCase() + option.slice(1)}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(event) => onReviewSubmit(event, option)}>
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
          <Button variant="success" type="submit">
            Submit Rating
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

const onReviewSubmit = async (
  event: React.FormEvent<HTMLFormElement>,
  option: string
) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  const rating = formData.get(`${option}-rating`) as string;
  if (!rating) return alert("Please provide a rating!");
  const name = formData.get("name") as string;
  const review = formData.get("review-data") as string;

  alert(`Rating: ${rating}\nName: ${name}\nReview: ${review}`);

  const reviewReq = await fetch("/api/review/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, rating, review })
  });
};
