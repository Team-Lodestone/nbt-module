import { Page } from "./App.js";

import type { Setter } from "solid-js";

export interface MainProps {
    setPage: Setter<Page>;
}

export default function Main(props: MainProps) {
    return (
        <>
            <div class="container">
                <h2 class="text-center" style="margin-bottom: 30px;color: white;margin-top: 50px;font-weight: bold;">NBT Editor</h2>
            </div>
            <div class="col text-center" style="background: rgb(35,40,50);border-top: 2px solid rgb(75,80,90) ;border-bottom: 2px solid rgb(75,80,90) ;">
                <button class="btn btn-primary" type="button" style="background: rgb(55,60,70);margin-top: 15px;color: white;margin-bottom: 15px;margin-right: 5px;margin-left: 5px;width: 190px;height: 190px;font-size: 14px;border: 2px solid rgb(75,80,90);border-radius: 15px;" onclick={() => props.setPage("nbt-editor")}>
                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor" class="justify-content-center align-items-center align-content-center align-self-center icon" style="color: rgb(250,250,250);width: 70px;height: 70px;margin-right: 40px;margin-left: 40px;margin-bottom: 15px;">
                        <g>
                            <rect fill="none" height="24" width="24"></rect>
                        </g>
                        <g>
                            <path d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.89,2,1.99,2H15v-8h5V8L14,2z M13,9V3.5L18.5,9H13z M17,21.66V16h5.66v2h-2.24 l2.95,2.95l-1.41,1.41L19,19.41l0,2.24H17z"></path>
                        </g>
                    </svg>
                    &nbsp;Open World / NBT File
                </button>
                <button class="btn btn-primary" type="button" style="background: rgb(55,60,70);margin-top: 15px;color: white;margin-bottom: 15px;margin-right: 5px;margin-left: 5px;width: 190px;height: 190px;border: 2px solid rgb(75,80,90);border-radius: 15px;/*font-size: 14px;*/" onclick={() => props.setPage("create-nbt")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-plus-lg justify-content-center align-items-center align-content-center align-self-center icon" style="color: rgb(250,250,250);width: 70px;height: 70px;margin-right: 40px;margin-left: 40px;margin-bottom: 15px;">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"></path>
                    </svg>
                    &nbsp;Create NBT File
                </button>
            </div>
        </>
    );
}