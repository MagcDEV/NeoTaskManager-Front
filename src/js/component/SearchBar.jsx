import React from "react";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = () => {
    return (
      <div className="col-6">
        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          id="outlined-basic"
          label="Search"
          variant="outlined"
        />
      </div>
    );
}