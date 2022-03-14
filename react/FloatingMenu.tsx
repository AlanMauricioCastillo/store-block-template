import React from "react";
import { useCssHandles } from "vtex.css-handles";
import "./style/floatingMenu.css";

interface FloatingMenuProps {}

const CSS_HANDLES = ["floatingMenuContainerHidden", "floatingMenuContainer", "containerItems", "floatingMenuContainerShow"];

/* const hideProduct = () => {
    var p = document.getElementById("burgerContainerId");
    if (p && !p.classList.contains("showing")) {
        p.classList.add("showing")
    } else {
        p?.classList.remove("showing")
    }
    console.log(p)
    console.log("ppppppppppppppppp")
    console.log(p?.classList)
} */

/* const displayMenu = () => {
    var e = document.getElementById("containerItems");
    if (e && e.classList.contains("showing")) {
        e.classList.remove("showing");
    } else {
        e?.classList.add("showing");
    }
    console.log(e);
    console.log("ppppppppppppppppp");
    console.log(e?.classList);
    console.log(e?.classList);

}; */

const FloatingMenu: StorefrontFunctionComponent<FloatingMenuProps> = ({}) => {
    const handles = useCssHandles(CSS_HANDLES);
    let classOfContainer = handles.floatingMenuContainerHidden;
    console.log(handles);

    const openFloatingMenu = (e: any) => {
        console.log(e);
        let p = document.getElementById("containerItems");
        if (p && p.className.includes("Hidden")) {
            classOfContainer = handles.floatingMenuContainerShow;
        } else {
            classOfContainer = handles.floatingMenuContainerHidden;
        }
        //console.log(p?.className, "openFloatingMenu");
    };

    return (
        <div>
            <div id="burgerContainerId" className="burgerContainer">
                <button className="burgerButton" onClick={(e) => openFloatingMenu(e)}>
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>

            <div id="containerItems" className={classOfContainer}>
                <div className="item1">
                    <div>
                        <button className="buttonItem1">
                            <i className="fa-solid fa-share-nodes"></i>
                        </button>
                        <div>
                            <p>item1</p>
                        </div>
                    </div>
                </div>
                <div className="item2">
                    <div>
                        <button className="buttonItem2">
                            <i className="fa-solid fa-circle-plus"></i>
                        </button>
                        <div>
                            <p>item2</p>
                        </div>
                    </div>
                </div>
                <div className="item3">
                    <div>
                        <button className="buttonItem3">
                            <i className="fa-solid fa-pencil"></i>
                        </button>
                        <div>
                            <p>item3</p>
                        </div>
                    </div>
                </div>
                <div className="item4">
                    <div>
                        <button className="buttonItem4">
                            <i className="fa-solid fa-circle-minus"></i>
                        </button>
                        <div>
                            <p>item4</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

FloatingMenu.schema = {
    title: "editor.FloatingMenu.title",
    description: "editor.FloatingMenu.description",
    type: "object",
    properties: {},
};

export default FloatingMenu;
