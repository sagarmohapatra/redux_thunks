import React from "react";
import { Dialog, Typography, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
const ShowToggle = ({ show, setshow, idcreate }) => {
  //5
  const mstate = useSelector((state) => state.crudx.users);
// console.log(mstate);
  const singleUser = mstate.filter((ele) => ele.id === idcreate);
  console.log(singleUser[0]);

  const handleClose = () => {
    setshow(false);
  };
  return (
    <Dialog
      open={show}
      onClose={handleClose}
      PaperProps={{
        sx: { width: "50%", maxHeight: 200, height: "50%", maxWidth: 400 },
      }}
    >
      <CloseIcon
        style={{
          display: "flex",
          marginLeft: "370px",
          cursor: "pointer",
          marginTop: "10px",
        }}
        onClick={() => setshow(false)}
      />
      <Box style={{ display: "flex",flexDirection:"column",alignItems:"center"}}>
      {
        singleUser.map((ele)=>(
          <><Typography>no-:{ele && ele.id}</Typography>
          <Typography>{ele && ele.name}</Typography>
          <Typography>{ele && ele.gender}</Typography>
          <Typography>{ele && ele.email}</Typography></>
        ))
        
      }
       
      </Box>
    </Dialog>
  );
};

export default ShowToggle;
