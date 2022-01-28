import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';


export const Home = () => (
	<div className="container-fluid mt-5 h-100">
        <div className="row h-100">
            <div id="sidebar" className="col-2 d-flex flex-column h-100 border">
                <dvi>Neo Task</dvi>
                <dvi>Home</dvi>
                <dvi>Create Task</dvi>
                <dvi>All Task</dvi>
                <dvi>Account</dvi>
                <dvi>Log Out</dvi>
            </div>
            <div id="layout" className="col-10 h-100 border">
                <div className="row m-2 justify-content-between">
                    <div className="col-6">
                        <TextField
                            InputProps={{
                            endAdornment: (
                              <InputAdornment>
                                <IconButton>
                                  <SearchIcon />
                                </IconButton>
                              </InputAdornment>
                                )
                              }}
                            id="outlined-basic" 
                            label="Search" 
                            variant="outlined" />
                    </div>
                    <div className="col-6">
                        <h4 className="text-center align-middle">
                            Hello, Manuel
                        </h4>
                    </div>
                </div>
                <div className="row justify-content-around h-100">
                    <div className="col-3 border h-100">To Do</div>
                    <div className="col-3 border h-100">In progress</div>
                    <div className="col-3 border h-100">Completed</div>
                </div>
            </div>
        </div>
	</div>
);
