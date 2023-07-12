import React from "react";
import style from "../style/UserInfo.module.css";

export default function UserInfo({ userInfo }) {
    const emailLen = () => {
        if (userInfo.email.length > 27) {
            const slicedUserEmail = userInfo.email.slice(0, 24);
            console.log((slicedUserEmail + "...").length);
            return (
                <div className={style.userEmail}>{slicedUserEmail + "..."}</div>
            );
        }
        return <div className={style.userEmail}>{userInfo.email}</div>;
    };

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
                    {emailLen()}
                </div>
            </div>
        </>
    );
}
