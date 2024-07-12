import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "react-bootstrap";

export default function DarkModeButton({
  dark,
  setDark,
}: {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
}) {
  const [buttonText, setButtonText] = useState("Dark");

  const changeMode = (isDark: boolean) => {
    if (isDark) {
      setDark(true);
      setButtonText("Light");
      localStorage.setItem("darkMode", JSON.stringify(true));
    } else {
      setDark(false);
      setButtonText("Dark");
      localStorage.setItem("darkMode", JSON.stringify(false));
    }
  };

  return (
    <Button
      id="button_darkmode"
      variant={`${dark ? "outline-light" : "outline-dark"}`}
      className="ms-auto me-2"
      onClick={() => {
        changeMode(!dark);
      }}
    >
      {buttonText}
    </Button>
  );
}
