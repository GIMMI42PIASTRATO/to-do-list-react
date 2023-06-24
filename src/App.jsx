import { useState } from "react";
import SideBar from "./components/SideBar";
import ToDoDisplay from "./components/ToDoDisplay";
import "./style/App.css";

function App() {
    return (
        <>
            <SideBar />
            <ToDoDisplay />
        </>
    );
}

export default App;
