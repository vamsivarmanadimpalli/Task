import { Button, DialogActions, TextField } from "@mui/material";
import React from "react";
import './User.css'
const AddId = ({ onAdd, handleCloser }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value, e.target.username.value, e.target.phone.value, e.target.email.value, e.target.website.value);
    e.target.name.value = "";
    e.target.username.value = "";
    e.target.email.value = "";
    e.target.website.value = "";
    e.target.phone.value = "";
  };

  return (
    <div className="formdialog">
      <form onSubmit={handleOnSubmit}>
        <div className="buttonside"><h3>Add User</h3>
          <Button onClick={handleCloser}>X</Button></div>
        <div className="inputcss">
          <TextField id="outlined-basic" placeholder="Name" name="name" style={{ width: "400px", padding: "2px 2px 2px 2px" }} />
          <TextField id="outlined-basic" placeholder="UserName" name="username" style={{ width: "400px", padding: "2px 2px 2px 2px" }} />
          <TextField id="outlined-basic" placeholder="Phone" name="phone" style={{ width: "400px", padding: "2px 2px 2px 2px" }} />
          <TextField id="outlined-basic" placeholder="Email" name="email" style={{ width: "400px", padding: "2px 2px 2px 2px" }} />
          <TextField id="outlined-basic" placeholder="Website" name="website" style={{ width: "400px", padding: "2px 2px 2px 2px" }} />
        </div>
        <DialogActions>
          <button onClick={handleCloser} >X Cancel</button>
          <button onSubmit={handleOnSubmit}>Add</button>
        </DialogActions>

      </form>
    </div>
  );
};

export default AddId;
