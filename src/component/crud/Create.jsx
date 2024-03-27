import { Card, Container, Grid, Box ,Typography} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/crudSlice/userDetailSlice";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const dispatch = useDispatch();
  const [user, setuser] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
  });
  const navigate = useNavigate();
  const change = (e) => {
    const copyuser = { ...user };
    copyuser[e.target.name] = e.target.value;
    setuser(copyuser);
  };
  const put = (e) => {
    e.preventDefault();
    dispatch(createUser(user));
    console.log(user);
    navigate("/read");
  }; 
  return (
    <div style={{ marginTop: "80px" }}>
      <Typography>Fill the data</Typography>
      <Grid container>
        <Grid item xs={9}>
          <Card style={{ marginTop: "40px", marginLeft: "120px" }}>
            <form onSubmit={put}>
              <input
                placeholder="Name"
                style={{ width: "200px", marginTop: "20px" }}
                name="name"
                value={user.name}
                onChange={change}
              />
              <br />
              <input
                name="email"
                placeholder="Email"
                value={user.email}
                style={{ width: "200px", marginTop: "20px" }}
                onChange={change}
              />
              <br />
              <input
                name="age"
                placeholder="Age"
                value={user.age}
                style={{ width: "200px", marginTop: "20px" }}
                onChange={change}
              />
              <br />
              <Box style={{ width: "200px", marginTop: "20px" }}>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={change}
                />
                Male
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={change}
                />
                Female
              </Box>
              <button type="submit">submit</button>
            </form>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Create;
