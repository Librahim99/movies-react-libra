import s from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useQuery } from "../Hooks/useQuery";


export function SearchBar() {
  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setsearchText("")
  }, [search]);

  const [searchText, setsearchText] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/?search=" + searchText); //añade "search={busqueda}" a la url
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.div}>
        <input
          placeholder="Search a movie..."
          className={s.input}
          type="text"
          value={searchText}
          onChange={(e) => setsearchText(e.target.value)} // cambia el valor del imput
        />
        <button className={s.search} type="submit">
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
}
