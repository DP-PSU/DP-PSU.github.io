import { useState } from "react";
import { Button, Card, Container, Modal } from "react-bootstrap";
import SophiaOption from "./SophiaOption";
import TESUOption from "./TESUOption";
import StraighterlineOption from "./StraighterlineOption";
import WestcottOption from "./WestcottOption";
import CLEPOption from "./CLEPOption";
import DSSTOption from "./DSSTOption";
import CourseraOption from "./CourseraOption";
import StudycomOption from "./StudycomOption";
import StudyhallOption from "./StudyhallOption";

export default function TransferOptions() {
  return (
    <Container>
      <SophiaOption />
      <TESUOption />
      <StraighterlineOption />
      <WestcottOption />
      <CLEPOption />
      <DSSTOption />
      <CourseraOption />
      <StudycomOption />
      <StudyhallOption />
    </Container>
  );
}

export const optionToTitle = {
  sophia: "Sophia Learning",
  tesu: "Thomas Edison State University",
  straighterline: "Straighterline",
  westcott: "WestCott Courses",
  clep: "College Level Examination Program",
  dsst: "DSST Exams",
  coursera: "Coursera",
  studycom: "Study.com",
  studyhall: "Study Hall",
};
