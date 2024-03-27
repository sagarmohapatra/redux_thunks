import { AppBar, Box, Button, InputBase, Toolbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import styled from "@emotion/styled";
import Create from "./Create";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchUser } from "../../redux/crudSlice/userDetailSlice";
const Head = styled(AppBar)({
  backgroundColor: "#24272c",
});
const Search = styled(InputBase)({
  backgroundColor: "white",
  width: "400px",
});

const SearchWrraper = styled(Box)({
  display: "flex",
  marginLeft: "820px",
  marginTop: "-0px",
});

const Navbar = () => {
  const count = useSelector((state) => state.crudx.users);
  const [searchData, setsearchData] = useState("");
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(searchUser(searchData))
  },[searchData])
  return (
    <Box>
      <Head>
        <Toolbar>
          <Box>
            <Box style={{ display: "flex" }}>
              <SearchWrraper>
                <Search
                  placeholder="Search…"
                  value={searchData}
                  onChange={(e) =>
                  setsearchData(e.target.value)
                  }
                  // inputProps={{ "aria-label": "search" }}
                  style={{ height: "40px", borderRadius: "4px 4px 4px 4px" }}
                />
              </SearchWrraper>
            </Box>
            <Box>
              <Button
                variant="outlined"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  textTransform: "none",
                }}
              >
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                  Create Post
                </Link>
              </Button>
              <Button
                variant="outlined"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  marginLeft: "10px",
                  textTransform: "none",
                }}
              >
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/read"
                >
                  All Post ({count.length})
                  {/* //here show all length of array */}
                </Link>
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Head>
    </Box>
  );
};

export default Navbar;
