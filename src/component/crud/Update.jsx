import { Card, Container, Grid, Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/crudSlice/userDetailSlice";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [updateData, setupdateData] = useState();
  const { id } = useParams(); //to achive url id we have used params
  // console.log(id);
  const { users, loading } = useSelector((state) => state.crudx);
  // console.log(users);
  // const singleUser=users.filter((ele)=>ele.id ===id)
const dispatch=useDispatch()
  useEffect(() => {
    if (id) {
      const singleUser = users.filter((ele) => ele.id === id);
      console.log(singleUser);
      setupdateData(singleUser[0]);
    }
  }, []);
  console.log(updateData);

  
    const navigate = useNavigate();
  const change = (e) => {
    const copyupdateData = { ...updateData };
    copyupdateData[e.target.name] = e.target.value;
    setupdateData(copyupdateData);
  };
    const put = (e) => {
      e.preventDefault();
      dispatch(updateUser(updateData));
      // console.log(user);
      navigate("/read");
    };
  return (
    <div style={{ marginTop: "90px" }}>
      <Typography>Edit the data</Typography>
      <Grid container>
        <Grid item xs={9}>
          <Card style={{ marginTop: "40px", marginLeft: "120px" }}>
            <form onSubmit={put}>
            <input
              placeholder="Name"
              style={{ width: "200px", marginTop: "20px" }}
              name="name"
              value={updateData && updateData.name}
              onChange={change}
            />
            <br />
            <input
              name="email"
              placeholder="Email"
              value={updateData && updateData.email}
              style={{ width: "200px", marginTop: "20px" }}
              onChange={change}
            />
            <br />
            <input
              name="age"
              placeholder="Age"
              value={updateData && updateData.age}
              style={{ width: "200px", marginTop: "20px" }}
              onChange={change}
            />
            <br />
            <Box style={{ width: "200px", marginTop: "20px" }}>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={updateData && updateData.gender === "male"}
                onChange={change}
              />
              Male
              <input
                type="radio"
                name="gender"
                value="female"
                checked={updateData && updateData.gender === "female"}
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

export default Update;
