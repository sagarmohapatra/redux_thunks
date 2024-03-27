import React, { useEffect, useState } from "react";
import { Box, Card, Typography, CardContent, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { showUser, deleteUser } from "../../redux/crudSlice/userDetailSlice";
import ShowToggle from "./ShowToggle";
import { Link } from "react-router-dom";
const Read = () => {
  const [show, setshow] = useState(false);
  const [idcreate, setidcreate] = useState();
  const dispatch = useDispatch();
  const { users, loading, serchData } = useSelector((state) => state.crudx);
  console.log("res", loading, users, serchData);
  const [radioData, setradioData] = useState("");

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2>loading</h2>;
  }
  const display = () => {
    setshow(true);
  };
  return (
    <div style={{ marginTop: "90px" }}>
      <input
        name="gender"
        value=""
        checked={radioData === ""}
        type="radio"
        onChange={(e) => setradioData(e.target.value)}
      />{" "}
      All
      <input
        name="gender"
        value="male"
        checked={radioData === "male"}
        type="radio"
        onChange={(e) => setradioData(e.target.value)}
      />
      Male
      <input
        name="gender"
        value="female"
        checked={radioData === "female"}
        type="radio"
        onChange={(e) => setradioData(e.target.value)}
      />{" "}
      Female
      {users &&
        users
          .filter((ele) => {
            if (ele.length === 0) {
              return ele;
            } else {
              return ele.name.toLowerCase().includes(serchData.toLowerCase());
            }
          })
          .filter((ele) => {
            if (radioData === "male") {
              return ele.gender === radioData;
            } else if (radioData === "female") {
              return ele.gender === radioData;
            } else return ele;
          })
          .map((ele) => (
            <Card
              style={{
                marginTop: "20px",
                width: "400px",
                textAlign: "center",
                marginLeft: "500px",
              }}
              key={ele.id}
            >
              <CardContent>
                <Typography style={{ fontWeight: "500" }}>
                  model no:{ele.id}
                </Typography>
                <Typography sx={{ fontSize: 24 }}>{ele.name}</Typography>
                <Typography>{ele.age}</Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {ele.email}
                </Typography>
                <Typography variant="body2">
                  {ele.gender}
                  <br />
                </Typography>
                <Button
                  variant="outlined"
                  style={{ marginRight: "4px" }}
                  onClick={() => {
                    display();
                    setidcreate(ele.id);
                  }} //
                >
                  View
                </Button>
                <Button variant="outlined">
                  <Link
                    to={`/edit/${ele.id}`}
                    variant="outlined"
                    style={{ marginRight: "4px" }}
                  >
                    Edit
                  </Link>
                </Button>
                <Button
                  variant="outlined"
                  onClick={(id) => dispatch(deleteUser(ele.id))}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          ))}
      <ShowToggle show={show} setshow={setshow} idcreate={idcreate} />
    </div>
  );
};

export default Read;
