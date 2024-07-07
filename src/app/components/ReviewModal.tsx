import { Modal } from "react-bootstrap";

export default function ReviewModal({
  option,
  visible,
  handleClose,
}: {
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
}) {
  return (
    <Modal show={visible} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          Review {option[0].toUpperCase() + option.slice(1)}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>To be implemented.</p>
      </Modal.Body>
    </Modal>
  );
}
