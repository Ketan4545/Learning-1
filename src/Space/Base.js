import * as React from "react";

import { Link, BrowserRouter, Route, Routes } from "react-router-dom";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import { useParams } from "react-router-dom";

import SpaceUpdate from "./Update";
import SpaceCreate from "./Create";
import Index from "./Index";
import Space from "./Space";

export default function Base() {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <Stack direction="row" spacing={5}>
        <Index />
        <Box
          sx={{
            width: "60vw",
            //maxWidth: "100%"
            pt: 10
          }}
          component="span"
        >
          <Routes>
            <Route exact path="create" element={<SpaceCreate />} />
            <Route
              exact
              path={encodeURI(params["name"]) + "/update"}
              element={<SpaceUpdate />}
            />
          </Routes>
        </Box>
        <Box
          sx={{
            width: "60vw",
            //maxWidth: "100%"
            pt: 10
          }}
          component="span"
        >
          <Routes>
            <Route exact path={encodeURI(params["name"])} element={<Space />} />
          </Routes>
        </Box>
      </Stack>
    </div>
  );
}
