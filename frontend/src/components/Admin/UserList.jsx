import React, { useState, useEffect } from "react";
import {
  Paper,
  Typography,
  CssBaseline,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUsers } from "../../actions/userAction";
import { AiFillDelete } from "react-icons/ai";

const UserList = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.getAllUsersReducer);
  const { loading, error, users } = userState;

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginLeft: "2vw",
      }}
    >
      <CssBaseline />
      <Paper
        elevation={3}
        sx={{
          padding: "16px",
          width: "100%",
          transition: "height 0.3s",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Users List
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users &&
                users.map((user) => (
                  <TableRow key={user._id}>
                    <TableCell>{user._id}</TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <AiFillDelete
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => {
                          dispatch(deleteUser(user._id));
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default UserList;
