import React, { useState } from "react";
import style from "../style/SideBar.module.css";
import UserInfo from "./UserInfo";
import List from "./List";
import Searchbar from "./Searchbar";
import { TbSun, TbStar, TbHome } from "react-icons/tb";
import { v4 as uuidv4 } from "uuid";

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
        id: uuidv4(),
    },
    list1: {
        icon: <TbStar />,
        text: "Important",
        color: "#eaaeba",
        id: uuidv4(),
    },
    list2: {
        icon: <TbHome />,
        text: "Activities",
        color: "#788cde",
        id: uuidv4(),
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
