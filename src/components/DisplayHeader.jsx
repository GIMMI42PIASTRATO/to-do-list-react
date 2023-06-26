import React from "react";
import style from "../style/DisplayHeader.module.css";

const date = new Date();

const dayNum = date.getDate();

const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
][date.getMonth()];

const dayAsName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
][date.getDay()];

export default function DisplayHeader({ display }) {
    return (
        <div className={style.container} style={{ color: display.color }}>
            <div className={style.text}>
                {<display.icon />}
                {display.text}
            </div>
            <div
                className={style.date}
            >{`${dayAsName}, ${dayNum} ${month}`}</div>
        </div>
    );
}
