import React, { useEffect, useState } from "react";
import {
  Snackbar,
  Paper,
  Container,
  Typography,
  Grid,
  Button,
  Alert,
} from "@mui/material";
import axios from "axios";
import UserItem from "./UserItem";
import UserForm from "./UserForm";

function UserList() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    messge: "",
    severity: "success",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.log("Error Occured :", error);
      showSnackbar("Error fetching Users", "error");
    }
  };

  const showSnackbar = (message, severity) => {
    setSnackbar({ open: true, message, severity });
  };

  const closeSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers(users.filter((user) => id !== user.id));
      showSnackbar("User Successfully Deleted", "success");
    } catch (error) {
      showSnackbar("Error in User Deletion", "error");
    }
  };

  const updateUser = async (user) => {
    try {
      await axios.put(
        `https://jsonplaceholder.typicode.com/users/${user.id}`,
        user
      );
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
      setEditingUser(null);
      showSnackbar("User Successfully Updated", "success");
    } catch (error) {
      showSnackbar("Error in User Updation", "error");
    }
  };

  const addUser = async (user) => {
    try {
      const response = await axios.post(
        `https://jsonplaceholder.typicode.com/users/`,
        user
      );
      setUsers([...users, response.data]);
      setEditingUser(null);
      showSnackbar("User Successfully Added", "success");
    } catch (error) {
      showSnackbar("Error in User Addition", "error");
    }
  };

  return (
    <div>
      <Container>
        <Paper elevation={5} style={{ padding: "20px", marginTop: "15px" }}>
          <Typography variant="h4" gutterBottom>
            User Management
          </Typography>

          <Grid container spacing={3}>
            {users.map((user) => (
              <UserItem
                key={user.id}
                user={user}
                onEdit={setEditingUser}
                onDelete={deleteUser}
              ></UserItem>
            ))}
          </Grid>
          <Button variant="contained" style={{marginTop : "15px"}} onClick={() => setEditingUser({})}>ADD USERS</Button>
          {editingUser &&
            <UserForm
              user={editingUser}
              onSave={editingUser.id ? updateUser : addUser}
              onCancel={() => setEditingUser(null)}
            ></UserForm>
          }
        </Paper>
      </Container>

      <Snackbar
        open={snackbar.open}
        onClose={closeSnackbar}
        autoHideDuration={6000}
      >
        <Alert
          onClose={closeSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default UserList;
