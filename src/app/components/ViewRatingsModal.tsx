import { Card, CardContent, CardHeader, Rating } from "@mui/material";
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
  const [averageRating, setAverageRating] = useState<number>(null!);

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

      var averageRating =
        (r as Array<any>).reduce((total, r) => total + Number(r.rating), 0) /
        (r as Array<any>).length;
      averageRating = +averageRating.toFixed(2);

      const rText = [
        <Fragment key={-1}>
          <Rating disabled={true} precision={0.1} value={averageRating} />
          <p>
            {Number.isNaN(averageRating)
              ? ""
              : `Average Rating: ${averageRating}/5`}
          </p>
        </Fragment>,
      ].concat(
        (r as Array<any>).length
          ? (r as Array<any>).map((rating, index) => (
              <Fragment key={index}>
                <Card variant="outlined" className="mb-2 bg-secondary">
                  <CardContent>
                    <Rating
                      disabled={true}
                      precision={0.5}
                      value={Number(rating.rating)}
                    />{" "}
                    Rated {rating.rating}/5 by{" "}
                    {rating.name.length ? rating.name : "Anonymous"}
                    <br />
                    {rating.reviewText.length ? rating.reviewText : ""}
                  </CardContent>
                </Card>
              </Fragment>
            ))
          : [
              <Card variant="outlined" className="mb-2 bg-secondary" key={0}>
                <CardContent>No reviews yet.</CardContent>
              </Card>,
            ]
      );

      setRatings(rText);
    };
    fetchRatings();
  }, [option, visible]);

  return (
    <Modal show={visible} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          Reviews for {option[0].toLocaleUpperCase() + option.slice(1)}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{ratings}</Modal.Body>
    </Modal>
  );
}
