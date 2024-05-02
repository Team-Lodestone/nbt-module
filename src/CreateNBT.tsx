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

export default function CreateNBT() {
    return (
        <>
            <h2 class="text-center" style="margin-bottom: 30px;color: white;margin-top: 50px;font-weight: bold;">Select A Platform!</h2>
            <div class="col text-center" style="background: rgb(35,40,50);border-top: 2px solid rgb(75,80,90) ;">
                <button class="btn btn-primary" type="button" style="background: rgb(55,60,70);margin-top: 15px;color: white;margin-bottom: 15px;margin-right: 5px;margin-left: 5px;width: 190px;height: 190px;border: 2px solid rgb(75,80,90);border-radius: 15px;font-size: 14px;">
                    <img class="justify-content-center align-items-center align-content-center align-self-center" style="width: 70px;height: 70px;margin-right: 40px;margin-left: 40px;margin-bottom: 15px;" src={Java_Platform_Icon}/>
                    &nbsp;Java
                </button>
                <button class="btn btn-primary" type="button" style="background: rgb(55,60,70);margin-top: 15px;color: white;margin-bottom: 15px;margin-right: 5px;margin-left: 5px;width: 190px;height: 190px;border: 2px solid rgb(75,80,90);border-radius: 15px;font-size: 14px;">
                    <img class="justify-content-center align-items-center align-content-center align-self-center" style="width: 70px;height: 70px;margin-right: 40px;margin-left: 40px;margin-bottom: 15px;" src={Bedrock_Platform_Icon}/>
                    &nbsp;Bedrock
                </button>
                <button class="btn btn-primary" type="button" style="background: rgb(55,60,70);margin-top: 15px;color: white;margin-bottom: 15px;margin-right: 5px;margin-left: 5px;width: 190px;height: 190px;border: 2px solid rgb(75,80,90);border-radius: 15px;font-size: 14px;">
                    <img class="justify-content-center align-items-center align-content-center align-self-center" style="width: 70px;height: 70px;margin-right: 40px;margin-left: 40px;margin-bottom: 15px;" src={Xbox_360_Platform_Icon}/>
                    &nbsp;Xbox 360
                </button>
                <button class="btn btn-primary" type="button" style="background: rgb(55,60,70);margin-top: 15px;color: white;margin-bottom: 15px;margin-right: 5px;margin-left: 5px;width: 190px;height: 190px;border: 2px solid rgb(75,80,90);border-radius: 15px;font-size: 14px;">
                    <img class="justify-content-center align-items-center align-content-center align-self-center" style="width: 90px;height: 90px;margin-right: 20px;margin-left: 20px;margin-bottom: 15px;" src={PlayStation_3_Platform_Icon}/>
                    &nbsp;PlayStation 3
                </button>
                <button class="btn btn-primary" type="button" style="background: rgb(55,60,70);margin-top: 15px;color: white;margin-bottom: 15px;margin-right: 5px;margin-left: 5px;width: 190px;height: 190px;border: 2px solid rgb(75,80,90);border-radius: 15px;font-size: 14px;">
                    <img class="justify-content-center align-items-center align-content-center align-self-center" style="width: 70px;height: 70px;margin-right: 40px;margin-left: 40px;margin-bottom: 15px;" src={Wii_U_Platform_Icon}/>
                    &nbsp;Wii U
                </button>
            </div>
            <div class="col text-center" style="background: rgb(35,40,50);border-bottom: 2px solid rgb(75,80,90) ;">
                <button class="btn btn-primary" type="button" style="background: rgb(55,60,70);color: white;margin-bottom: 15px;margin-right: 5px;margin-left: 5px;width: 190px;height: 190px;border: 2px solid rgb(75,80,90);border-radius: 15px;font-size: 14px;">
                    <img class="justify-content-center align-items-center align-content-center align-self-center" style="width: 70px;height: 70px;margin-right: 40px;margin-left: 40px;margin-bottom: 15px;" src={New_3DS_Platform_Icon}/>
                    &nbsp;New Nintendo 3DS
                </button>
                <button class="btn btn-primary" type="button" style="background: rgb(55,60,70);color: white;margin-bottom: 15px;margin-right: 5px;margin-left: 5px;width: 190px;height: 190px;border: 2px solid rgb(75,80,90);border-radius: 15px;font-size: 14px;">
                    <img class="justify-content-center align-items-center align-content-center align-self-center" style="width: 100px;height: 100px;margin-right: 10px;margin-left: 10px;margin-bottom: 15px;" src={PlayStation_Vita_Platform_Icon}/>
                    &nbsp;PlayStation Vita
                </button>
                <button class="btn btn-primary" type="button" style="background: rgb(55,60,70);color: white;margin-bottom: 15px;margin-right: 5px;margin-left: 5px;width: 190px;height: 190px;border: 2px solid rgb(75,80,90);border-radius: 15px;font-size: 14px;">
                    <img class="justify-content-center align-items-center align-content-center align-self-center" style="width: 70px;height: 70px;margin-right: 40px;margin-left: 40px;margin-bottom: 15px;" src={Xbox_One_Platform_Icon}/>
                    &nbsp;Xbox One
                </button>
                <button class="btn btn-primary" type="button" style="background: rgb(55,60,70);color: white;margin-bottom: 15px;margin-right: 5px;margin-left: 5px;width: 190px;height: 190px;border: 2px solid rgb(75,80,90);border-radius: 15px;font-size: 14px;">
                    <img class="justify-content-center align-items-center align-content-center align-self-center" style="width: 90px;height: 90px;margin-right: 20px;margin-left: 20px;margin-bottom: 15px;" src={PlayStation_4_Platform_Icon}/>
                    &nbsp;PlayStation 4
                </button>
                <button class="btn btn-primary" type="button" style="background: rgb(55,60,70);color: white;margin-bottom: 15px;margin-right: 5px;margin-left: 5px;width: 190px;height: 190px;border: 2px solid rgb(75,80,90);border-radius: 15px;font-size: 14px;">
                    <img class="justify-content-center align-items-center align-content-center align-self-center" style="width: 70px;height: 70px;margin-right: 40px;margin-left: 40px;margin-bottom: 15px;" src={Nintendo_Switch_Platform_Icon}/>
                    &nbsp;Switch
                </button>
            </div>
        </>
    );
}