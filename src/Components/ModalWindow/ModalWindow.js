import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import GenderDiagram from "../GenderDiagram/GenderDiagram";
import "./modalWindow.css";
import PropTypes from "prop-types";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() { 
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ModalWindow(props) {
  const {users} = props;
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const searchGender = (array) =>{
    let maleGender = 0, femaleGender = 0;
    array.map(item => {
        if(item.gender === "male"){
            maleGender++;
        } 
        else femaleGender++;
    });
    return [maleGender,femaleGender];
};

const renderFunctionGender = () =>{
    let arr = [];
    arr = searchGender(users);
    return(
        <div>
            <GenderDiagram 
            male ={arr[0]}
            female={arr[1]}
            />
        </div>
    );
};
const item = renderFunctionGender();
  return (
    <div>
      <button type="button" className="button__modal" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          {item}
        </div>
      </Modal>
    </div>
  );
}

ModalWindow.propTypes = {
  users: PropTypes.any
};