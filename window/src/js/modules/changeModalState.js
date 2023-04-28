import checkNumInputs from "./checkNumInputs";
const changeModalState = (state) => {
    const windowForm = document.querySelectorAll(".balcon_icons_img"),
        windowWidth = document.querySelectorAll("#width"),
        windowHeight = document.querySelectorAll("#height"),
        windowType = document.querySelectorAll("#view_type"),
        windowProfiles = document.querySelectorAll(".checkbox");

    checkNumInputs("#width");
    checkNumInputs("#height");

    const bindActionToElements = (event, elements, prop) => {
        elements.forEach((item, index) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case "SPAN":
                        state[prop] = index;
                        break;
                    case "INPUT":
                        if (item.getAttribute("type") === "checkbox") {
                            index === 0
                                ? (state[prop] = "Холодное")
                                : (state[prop] = "Теплое");
                            elements.forEach((box, k) => {
                                box.checked = false;
                                box.setAttribute("required", "false");
                                if (index == k) {
                                    box.checked = true;
                                    box.setAttribute("required", "true");
                                }
                            });
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case "SELECT": {
                        state[prop] = item.value;
                        break;
                    }
                }
                console.log(state);
            });
        });
    };

    bindActionToElements("click", windowForm, "form");
    bindActionToElements("input", windowWidth, "width");
    bindActionToElements("input", windowHeight, "height");
    bindActionToElements("change", windowType, "type");
    bindActionToElements("change", windowProfiles, "profile");
};

export default changeModalState;
