import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import GridOnIcon from "@mui/icons-material/GridOn";
import EditIcon from "@mui/icons-material/Edit";
import { ListItemButton } from "@mui/material";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate, useParams } from "react-router-dom";
import {
  FormHelperText,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListSubheader
} from "@mui/material";

const SpaceCreate = () => {
  const name = "three";
  const navigate = useNavigate();
  const [name1, setName1] = useState("");
  const [desc, setDesc] = useState("");
  const [space1, setSpace1] = useState("");
  const [space2, setSpace2] = useState("");
  const params = useParams();

  function createSpace() {
    navigate("/" + params["name"] + "/" + name);
    console.log(name1, desc, space1, space2);
  }

  const Arr1 = ["R1", "R2", "R3"];
  const Arr2 = ["C1", "C2", "C3"];
  return (
    <div>
      <Stack spacing={5}>
        <TextField
          fullWidth
          label="Name"
          id="name"
          value={name1}
          onChange={(e) => setName1(e.target.value)}
        />
        <TextField
          fullWidth
          label="Description"
          id="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </Stack>
      <Box sx={{ pt: 5 }}>
        <Box component="span" sx={{ pt: 5 }}>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel htmlFor="grouped-native-select">Primary</InputLabel>
            <Select
              native
              defaultValue=""
              id="grouped-native-select"
              label="Primary"
              value={space1}
              onChange={(e) => setSpace1(e.target.value)}
            >
              <option aria-label="None" value="" />
              <optgroup label="Report">
                {Arr1.map((row) => (
                  <option value={"Report-" + row}>{row}</option>
                ))}
              </optgroup>
              <optgroup label="Chart">
                {Arr2.map((row) => (
                  <option value={"Chart-" + row}>{row}</option>
                ))}
              </optgroup>
            </Select>
          </FormControl>
        </Box>
        <Box component="span" sx={{ pl: 5 }}>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel htmlFor="grouped-native-select-1">Secondary</InputLabel>
            <Select
              native
              defaultValue=""
              id="grouped-native-select-1"
              label="Secondary"
              value={space2}
              onChange={(e) => setSpace2(e.target.value)}
            >
              <option aria-label="None" value="" />
              <optgroup label="Report">
                {Arr1.map((row) => (
                  <option value={"Report-" + row}>{row}</option>
                ))}
              </optgroup>
              <optgroup label="Chart">
                {Arr2.map((row) => (
                  <option value={"Chart-" + row}>{row}</option>
                ))}
              </optgroup>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Button id="btn" variant="contained" sx={{ mt: 5 }} onClick={createSpace}>
        Create Report
      </Button>
    </div>
  );
};

export default SpaceCreate;
