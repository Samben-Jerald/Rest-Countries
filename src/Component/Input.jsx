import React from "react";
import "../Style/Input.css";
import SearchIcon from "@mui/icons-material/Search";
import {useSelector} from 'react-redux'

const Input = React.forwardRef((props,ref) => {
  const darkMode = useSelector(state=> state.darkmode.darstateMode)
  const Validation = darkMode ? "add-shadow" : "";
  const inputBackground = darkMode ? "changebackground" : "";

  return (
    <div className={`${Validation}`} style={{borderRadius: darkMode && "10px"}}>
      <SearchIcon
        className={`search-icon`}
        fontSize="small"
        sx={{ color: "hsl(0, 0%, 52%)" }}
      />
      <input type="text" className={`inputClass ${inputBackground}`} {...props} ref={ref} />
    </div>
  );
});

export default Input;
