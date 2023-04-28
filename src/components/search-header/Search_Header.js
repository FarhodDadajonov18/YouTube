import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const Search_Header = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (value) {
      navigate(`/search/${value}`);
    }

    setValue("");
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <input
          className="form__input"
          type="text"
          placeholder="Введите запрос"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <span className="form__search material-icons-outlined">
          <button
            type="submit"
            style={{ border: "none", background: "transparent" }}
          >
            <SearchIcon />
          </button>
        </span>
      </form>
    </div>
  );
};

export default Search_Header;
