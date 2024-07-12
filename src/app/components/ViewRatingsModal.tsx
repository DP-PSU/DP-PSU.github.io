import { Card, CardContent, Rating, styled } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { optionToTitle } from "./TransferOptions";

const StyledAverageRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "darkblue",
  },
});

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

      var averageRating =
        (r as Array<any>).reduce((total, r) => total + Number(r.rating), 0) /
        (r as Array<any>).length;
      averageRating = +averageRating.toFixed(2);

      const rText = [
        <Fragment key={0}>
          <StyledAverageRating
            disabled={true}
            precision={0.25}
            value={averageRating}
            size="large"
            hidden={Number.isNaN(averageRating)}
          />
          <p>
            {Number.isNaN(averageRating)
              ? ""
              : `Average Rating: ${averageRating}/5`}
          </p>
        </Fragment>,
      ].concat(
        (r as Array<any>).length
          ? (r as Array<any>).map((rating, index) => (
              <Fragment key={index + 1}>
                <Card variant="outlined" className="mb-2 bg-review">
                  <CardContent className="position-relative">
                    <Rating
                      disabled={true}
                      precision={0.5}
                      value={Number(rating.rating)}
                    />{" "}
                    <p style={{ position: "absolute", top: 1, right: 5 }}>
                      Rated {rating.rating}/5 by{" "}
                      {rating.name.length ? rating.name : "Anonymous"}
                    </p>
                    <br />
                    {rating.reviewText.length ? rating.reviewText : ""}
                  </CardContent>
                </Card>
              </Fragment>
            ))
          : [<p key={0}>No reviews yet :(</p>]
      );

      setRatings(rText);
    };
    fetchRatings();
  }, [option, visible]);

  return (
    <Modal show={visible} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Reviews for {optionToTitle[option]}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{ratings}</Modal.Body>
    </Modal>
  );
}
