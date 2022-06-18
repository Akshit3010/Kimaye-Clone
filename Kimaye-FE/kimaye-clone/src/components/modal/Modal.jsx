import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false);

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <h1>Hello</h1>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Button onClick={() => setState(true)}>Right</Button>
        <Drawer anchor={"right"} open={state} onClose={() => setState(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
