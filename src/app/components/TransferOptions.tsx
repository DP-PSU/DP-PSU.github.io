import { useEffect, useState } from "react";
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

export default function TransferOptions({ dark }: Readonly<{ dark: boolean }>) {
  return (
    <Container>
      <SophiaOption darkMode={dark} />
      <TESUOption darkMode={dark} />
      <StraighterlineOption darkMode={dark} />
      <WestcottOption darkMode={dark} />
      <CLEPOption darkMode={dark} />
      <DSSTOption darkMode={dark} />
      <CourseraOption darkMode={dark} />
      <StudycomOption darkMode={dark} />
      <StudyhallOption darkMode={dark} />
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
