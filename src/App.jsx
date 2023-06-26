import { useState } from "react";
import SideBar from "./components/SideBar";
import ToDoDisplay from "./components/ToDoDisplay";
import lists from "./data/listsData";
import "./style/App.css";

function App() {
    const [display, setDisplay] = useState(lists.myDay);

    return (
        <>
            <SideBar setDisplay={setDisplay} />
            <ToDoDisplay display={display} />
        </>
    );
}

export default App;
