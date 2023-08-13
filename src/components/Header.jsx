import React from "react";
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <h1><NoteAltIcon /> Noted</h1>
      {props.logout && <Link to="/logout">Logout</Link>}
    </header>
  );
}

export default Header;
