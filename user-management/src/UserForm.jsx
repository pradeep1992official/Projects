import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

function UserForm({ user, onSave, onCancel }) {
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  }

  return <div>
    <Dialog open onClose={onCancel}>
      <DialogTitle>{user.id ? "Edit User" : "Add User"}</DialogTitle>
      <DialogContent>
        <TextField autoFocus
        margin="dense"
        name="name"
        value={formData.name}
        label="Name"
        type="text"
        fullWidth
        onChange={handleChange}
        >
        </TextField>
        <TextField autoFocus
        margin="dense"
        name="email"
        value={formData.email}
        label="Email"
        type="email"
        fullWidth
        onChange={handleChange}
        >
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={onCancel}>Cancel</Button>
        <Button onClick={handleSubmit}>Save</Button>
      </DialogActions>

    </Dialog>
  </div>;
}

export default UserForm;
