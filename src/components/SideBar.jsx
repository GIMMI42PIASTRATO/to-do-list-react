import React, { useState } from "react";
import style from "../style/SideBar.module.css";
import UserInfo from "./UserInfo";
import List from "./List";
import Searchbar from "./Searchbar";
import lists from "../data/listsData";
import user from "../data/userData";

export default function SideBar({ setDisplay }) {
    const [userState, setUserState] = useState(user);

    return (
        <>
            <div className={style.container}>
                <div className={style.sideBar}>
                    <UserInfo userInfo={userState} />
                    <Searchbar />
                    <List list={lists.myDay} setDisplay={setDisplay} />
                    <List list={lists.important} setDisplay={setDisplay} />
                    <List list={lists.activities} setDisplay={setDisplay} />
                </div>
            </div>
        </>
    );
}
