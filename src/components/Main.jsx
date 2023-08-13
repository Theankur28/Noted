import React from "react"
import { Link } from "react-router-dom";
import img from "../assets/note.png";
import NoteAltIcon from '@mui/icons-material/NoteAlt';

const Main = () => {
  return (
    <div className="welcome-page">
      <h1 className="logo"><NoteAltIcon /> Noted App</h1>
      <div className="content">
        <div className="title">
          <h1>Start by Taking Notes!</h1>
          <div className="buttons">
            <Link to="/login" className="button login">Login</Link>
            <Link to="/signup" className="button signup">Signup</Link>
          </div>
        </div>
        <img src={img} alt="Note" />
      </div>
    </div>
  )
}

export default Main;
