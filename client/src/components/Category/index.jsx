import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import '../../styles/Category.css'

export default function SelectSmall({ setCategory, category, blogFiltering, categories }) {
  // Set category evertime one is selected
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 250, minHeight: 10 }} size="small">
      <InputLabel id="demo-select-small">Category</InputLabel>
      <Select
        sx={{ " &.MuiInputBase-root": { color: "white" }, "&& .MuiSvgIcon-root": { color: "white" } }} labelId="demo-select-small"
        id="demo-select-small"
        value={category}
        label="Category"
        onChange={handleChange}
      >
        {blogFiltering && (
          <MenuItem value="None">
            <em>None</em>
          </MenuItem>
        )}

        {categories.map((option) => (
          <MenuItem key={option.id} value={option.name}>
            {" "}
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
