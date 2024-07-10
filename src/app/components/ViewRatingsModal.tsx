import { Rating } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { Button, Form, FormGroup, Modal } from "react-bootstrap";

export default function ViewRatingsModal({
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
  const [ratings, setRatings] = useState<JSX.Element[]>([
    <p key={0}>Loading...</p>,
  ]);

  useEffect(() => {
    const fetchRatings = async () => {
      const response = await fetch("api/reviews/getreviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ option }),
      });

      const r = await response.json();
      //  (r as Array<Object>).map(rating => Object.entries(rating))
      // for (Object obj in r) {

      // }
      const rText = (r as Array<any>).length
        ? (r as Array<any>).map((rating, index) => (
            <Fragment key={index}>
              <h3>
                Name: {rating.name.length ? rating.name : "Anonymous"}; Rating:{" "}
                {rating.rating}
              </h3>
              <Rating disabled={true} value={Number(rating.rating)} />
              <br />
              <p>{rating.reviewText}</p>
            </Fragment>
          ))
        : [<p key={0}>No reviews yet.</p>];
      setRatings(rText);
    };
    fetchRatings();
  }, [option, visible]);

  return (
    <Modal show={visible} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Reviews for {option}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{ratings}</Modal.Body>
    </Modal>
  );
}
