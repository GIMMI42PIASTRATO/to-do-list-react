import React from "react";
import style from "../style/UserInfo.module.css";

export default function UserInfo({ userInfo }) {
    return (
        <>
            <div className={style.container}>
                <div className={style.imageContainer}>
                    <img
                        src={userInfo.img}
                        alt="User image"
                        className={style.userImage}
                    />
                </div>
                <div className={style.userInfoContainer}>
                    <div className={style.userName}>{userInfo.name}</div>
                    <div className={style.userEmail}>{userInfo.email}</div>
                </div>
            </div>
        </>
    );
}
