import React, { useState } from "react";
import style from "../style/SideBar.module.css";
import UserInfo from "./UserInfo";
import List from "./List";
import Searchbar from "./Searchbar";
import { TbSun, TbStar, TbHome } from "react-icons/tb";

const initialUser = {
    name: "Albedo Kreideprinz",
    img: "src/assets/smugAlbedoGenshinImpactEmoji.png",
    email: "kreideprinz.albedo@gmail.com",
};

const lists = {
    list0: {
        icon: <TbSun />,
        text: "My day",
        color: "#788cde",
    },
    list1: {
        icon: <TbStar />,
        text: "Important",
        color: "#eaaeba",
    },
    list2: {
        icon: <TbHome />,
        text: "Activities",
        color: "#788cde",
    },
};

export default function SideBar() {
    const [userState, setUserState] = useState(initialUser);
    const [listState, setListState] = useState();

    return (
        <>
            <div className={style.container}>
                <div className={style.sideBar}>
                    <UserInfo userInfo={userState} />
                    <Searchbar />
                    <List list={lists.list0} />
                    <List list={lists.list1} />
                    <List list={lists.list2} />
                </div>
            </div>
        </>
    );
}
