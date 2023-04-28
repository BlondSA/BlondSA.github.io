const modals = () => {
    const bindModal = (
        triggerSelector,
        modalWindowSelector,
        closeBtnSelector,
        closeClickOverlay = true
    ) => {
        const triggerButton = document.querySelectorAll(triggerSelector),
            modalWindow = document.querySelector(modalWindowSelector),
            closeBtn = document.querySelector(closeBtnSelector),
            windows = document.querySelectorAll("[data-modal]"),
            scroll = calcScroll();

        triggerButton.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach((item) => {
                    item.style.display = "none";
                });

                modalWindow.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
                // document.body.classList.add("modal-open");
            });
        });

        closeBtn.addEventListener("click", () => {
            windows.forEach((item) => {
                item.style.display = "none";
            });
            modalWindow.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
            // document.body.classList.remove("modal-open");
        });

        modalWindow.addEventListener("click", (e) => {
            if (e.target === modalWindow && closeClickOverlay) {
                windows.forEach((item) => {
                    item.style.display = "none";
                });

                modalWindow.style.display = "none";
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`;
                // document.body.classList.remove("modal-open");
            }
        });
    };

    const showModuleByTime = (selector, time) => {
        setTimeout(() => {
            document.querySelector(selector).style.display = "block";
            document.body.style.overflow = "hidden";
        }, time);
    };

    function calcScroll() {
        let div = document.createElement("div");
        div.style.width = "50px";
        div.style.height = "50px";
        div.style.overflowY = "scroll";
        div.style.visibility = "hidden";
        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    }

    bindModal(
        ".popup_engineer_btn",
        ".popup_engineer",
        ".popup_engineer .popup_close"
    );

    bindModal(".phone_link", ".popup", ".popup .popup_close");
    bindModal(".phone_link", ".popup", ".popup .popup_close");
    bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close", false);
    bindModal(
        ".popup_calc_button",
        ".popup_calc_profile",
        ".popup_calc_profile_close",
        false
    );
    bindModal(
        ".popup_calc_profile_button",
        ".popup_calc_end",
        ".popup_calc_end_close",
        false
    );
    // showModuleByTime(".popup", 60000);
};

export default modals;
