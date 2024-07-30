import { FormControlLabel, Switch } from "@mui/material";
import { type Dispatch, type SetStateAction } from "react";

export default function DarkModeSwitch({
  dark,
  setDark,
}: Readonly<{
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
}>) {
  const onSwitchChange = (checked: boolean) => {
    setDark(checked);
    localStorage.setItem("darkMode", JSON.stringify(checked));
  };

  return (
    <FormControlLabel
      value="Dark Mode button"
      className="ms-auto me-2"
      control={
        <Switch
          color="primary"
          checked={dark}
          onChange={(e) => onSwitchChange(e.target.checked)}
        />
      }
      label={dark ? "Dark" : "Light"}
      sx={{ color: dark ? "white" : "black" }}
      labelPlacement="start"
    />
  );
}
