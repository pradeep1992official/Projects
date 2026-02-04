import React from "react";
import { Grid, Card, CardContent, Typography, CardActions, Button } from "@mui/material";

function UserItem({ user, onEdit, onDelete }) {
  return (
        <Grid size={4}>
        <Card style={{ backgroundColor: "lightgrey" }}>
          <CardContent>
            <Typography variant="h5" style={{color : "black"}}>
              {user.name}
            </Typography>
            <Typography style={{color : "grey"}}>
              {user.email}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={()=>onEdit(user)}>EDIT</Button>
            <Button size="small" color="secondary" onClick={()=>onDelete(user.id)}>Delete</Button>
          </CardActions>
        </Card>
      </Grid>
    );
}

export default UserItem;
