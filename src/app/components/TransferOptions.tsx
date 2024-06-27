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
