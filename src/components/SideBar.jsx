import React, { useState } from "react";
import style from "../style/SideBar.module.css";
import UserInfo from "./UserInfo";
import List from "./List";

const initialUser = {
    name: "Albedo Kreideprinz",
    img: "src/assets/smugAlbedoGenshinImpactEmoji.png",
    email: "kreideprinz.albedo@gmail.com",
};

export default function SideBar() {
    const [userState, setUserState] = useState(initialUser);

    return (
        <>
            <div className={style.container}>
                <div className={style.sideBar}>
                    <UserInfo userInfo={userState} />
                    {/* <Searchbar /> */}
                    {/* <List /> */}
                </div>
            </div>
        </>
    );
}
