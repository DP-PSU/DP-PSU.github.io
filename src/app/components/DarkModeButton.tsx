import { FormControlLabel, Switch } from "@mui/material";
import { type Dispatch, type SetStateAction } from "react";

export default function DarkModeButton({
  dark,
  setDark,
}: {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <FormControlLabel
      value="Dark Mode button"
      className="ms-auto me-2"
      control={
        <Switch
          color="primary"
          checked={dark}
          onChange={(e) => setDark(e.target.checked)}
        />
      }
      label={dark ? "Dark" : "Light"}
      sx={{ color: dark ? "white" : "black" }}
      labelPlacement="start"
    />
  );
}
