import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../state/index";
import { bindActionCreators } from "redux";

function CreateArea(props) {
  let isExpanded = useSelector(state => state.expanded);
  const dispatch = useDispatch();
  const action = bindActionCreators(actionCreators, dispatch);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  // Update value in 
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  // Submit the note
  function submitNote(event) {
    // Set the userId in the note before adding
    const noteWithUserId = { ...note, userId: props.userId };
    props.onAdd(noteWithUserId);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Enter Title"
          />
        )}
        <textarea
          name="content"
          onClick={() => {
            action.notExpanded(isExpanded)
          }}
          onChange={handleChange}
          value={note.content}
          placeholder="Create a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </>
  );
}

export default CreateArea;
