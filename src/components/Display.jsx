import React from "react";
import style from "../style/Display.module.css";
import DisplayHeader from "./DisplayHeader";
import ToDoContainer from "./ToDoContainer";
import AddToDo from "./AddToDo";
import { useState } from "react";

export default function Display({ display }) {
    const [todos, setTodos] = useState([]);
    const [todoText, setTodoText] = useState("");

    return (
        <div className={style.container}>
            <DisplayHeader display={display} />

            <ToDoContainer data={display} todos={todos} />

            <AddToDo
                data={display}
                todos={todos}
                setTodos={setTodos}
                todoText={todoText}
                setTodoText={setTodoText}
            />
        </div>
    );
}
