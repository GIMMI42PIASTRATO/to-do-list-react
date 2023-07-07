import { useState } from "react";
import SideBar from "./components/SideBar";
import Display from "./components/Display";
import lists from "./data/listsData";
import "./style/App.css";

function App() {
    const [display, setDisplay] = useState(lists.myDay);

    return (
        <>
            <SideBar setDisplay={setDisplay} />
            <Display display={display} />
        </>
    );
}

export default App;
