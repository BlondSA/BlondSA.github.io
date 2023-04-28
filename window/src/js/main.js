import "./slider";
import modals from "./modules/modals";
import tabsSlider from "./modules/tabsSlider";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";
import images from "./modules/images";

let modalState = {
    form: 0,
    type: "tree",
};
let deadline = "2021-07-10";

window.addEventListener("DOMContentLoaded", () => {
    "use strict";

    changeModalState(modalState);
    modals();
    tabsSlider(
        ".glazing_slider",
        ".glazing_block",
        ".glazing_content",
        "active"
    );
    tabsSlider(
        ".decoration_slider",
        ".no_click",
        ".decoration_content > div > div",
        "after_click"
    );
    tabsSlider(
        ".balcon_icons",
        ".balcon_icons_img",
        ".big_img > img",
        "do_image_more",
        "inline-block"
    );
    forms(modalState);
    timer(".container1", deadline);
    images();
});
