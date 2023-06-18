import React from "react";
import { v4 as uuidv4 } from "uuid";
import style from "../style/Searchbar.module.css";

export default function Searchbar() {
    return (
        <div className={style.container}>
            <input
                className={style.searchBar}
                type="search"
                name="listSearchbar"
                id={uuidv4()}
                placeholder="Search"
            />
        </div>
    );
}
