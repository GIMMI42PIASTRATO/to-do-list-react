import { TbSun, TbStar, TbHome } from "react-icons/tb";
import { v4 as uuidv4 } from "uuid";

const lists = {
    myDay: {
        icon: TbSun,
        svg: "src/assets/sun.svg",
        text: "My day",
        // color: "#fbbc04",
        color: "#ecbda2",
        id: uuidv4(),
    },
    important: {
        icon: TbStar,
        svg: "src/assets/star.svg",
        text: "Important",
        // color: "#ea4335",
        color: "#f5b6c2",
        id: uuidv4(),
    },
    activities: {
        icon: TbHome,
        svg: "src/assets/home.svg",
        text: "Activities",
        // color: "#174ea6",
        color: "#788cde",
        id: uuidv4(),
    },
};

export default lists;
