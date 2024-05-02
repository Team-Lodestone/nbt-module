import Java_Platform_Icon from "../assets/img/PLATFORMS/Java_Platform_Icon.svg";
import Bedrock_Platform_Icon from "../assets/img/PLATFORMS/Bedrock_Platform_Icon.svg";
import Xbox_360_Platform_Icon from "../assets/img/PLATFORMS/Xbox_360_Platform_Icon.svg";
import PlayStation_3_Platform_Icon from "../assets/img/PLATFORMS/PlayStation_3_Platform_Icon.svg";
import Wii_U_Platform_Icon from "../assets/img/PLATFORMS/Wii_U_Platform_Icon.svg";
import New_3DS_Platform_Icon from "../assets/img/PLATFORMS/New_3DS_Platform_Icon.svg";
import PlayStation_Vita_Platform_Icon from "../assets/img/PLATFORMS/PlayStation_Vita_Platform_Icon.svg";
import Xbox_One_Platform_Icon from "../assets/img/PLATFORMS/Xbox_One_Platform_Icon.svg";
import PlayStation_4_Platform_Icon from "../assets/img/PLATFORMS/PlayStation_4_Platform_Icon.svg";
import Nintendo_Switch_Platform_Icon from "../assets/img/PLATFORMS/Nintendo_Switch_Platform_Icon.svg";
import Header from "./Header.js";

export default function CreateNBT() {
    return (
        <>
            <Header>Select A Platform!</Header>
            <div class="col text-center" style="background: rgb(35,40,50);border-top: 2px solid rgb(75,80,90) ;">
                <Platform name="Java" src={Java_Platform_Icon} size={70}/>
                <Platform name="Bedrock" src={Bedrock_Platform_Icon} size={70}/>
                <Platform name="Xbox 360" src={Xbox_360_Platform_Icon} size={70}/>
                <Platform name="PlayStation 3" src={PlayStation_3_Platform_Icon} size={90}/>
                <Platform name="Wii U" src={Wii_U_Platform_Icon} size={70}/>
            </div>
            <div class="col text-center" style="background: rgb(35,40,50);border-bottom: 2px solid rgb(75,80,90) ;">
                <Platform name="New Nintendo 3DS" src={New_3DS_Platform_Icon} size={70}/>
                <Platform name="PlayStation Vita" src={PlayStation_Vita_Platform_Icon} size={100}/>
                <Platform name="Xbox One" src={Xbox_One_Platform_Icon} size={70}/>
                <Platform name="PlayStation 4" src={PlayStation_4_Platform_Icon} size={90}/>
                <Platform name="Switch" src={Nintendo_Switch_Platform_Icon} size={70}/>
            </div>
        </>
    );
}

interface PlatformProps {
    name: string;
    src: string;
    size: number;
}

function Platform(props: PlatformProps) {
    return (
        <button class="btn btn-primary" type="button" style="background: rgb(55,60,70);color: white;margin-bottom: 15px;margin-right: 5px;margin-left: 5px;width: 190px;height: 190px;border: 2px solid rgb(75,80,90);border-radius: 15px;font-size: 14px;">
            <img class="justify-content-center align-items-center align-content-center align-self-center" style={`width: ${props.size}px;height: ${props.size}px;margin-right: 40px;margin-left: 40px;margin-bottom: 15px;`} src={props.src}/>
            &nbsp;{props.name}
        </button>
    );
}