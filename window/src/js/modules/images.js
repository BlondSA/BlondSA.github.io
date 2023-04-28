const images = () => {
    const imgPopup = document.createElement("div"),
        workSection = document.querySelector(".works"),
        bigImg = document.createElement("img");

    imgPopup.classList.add("popup");
    workSection.appendChild(imgPopup);
    imgPopup.style.cssText = "display: none;";

    imgPopup.appendChild(bigImg);

    workSection.addEventListener("click", (e) => {
        e.preventDefault();
        let target = e.target;

        if (target && target.classList.contains("preview")) {
            // imgPopup.style.display = "flex";
            imgPopup.style.cssText =
                "display: flex; align-items: center; justify-content: center;";
            document.body.style.cssText = "overflow: hidden";
            const path = target.parentNode.getAttribute("href");
            bigImg.setAttribute("src", path);
        }

        if (target && target.matches("div.popup")) {
            imgPopup.style.cssText = "display: none;";
            document.body.style.cssText = "overflow: scroll";
        }
    });
};
export default images;
