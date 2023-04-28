import checkNumInputs from "./checkNumInputs";

const forms = (state) => {
    const forms = document.querySelectorAll("form"),
        inputs = document.querySelectorAll("input");

    checkNumInputs("input[name='user_phone']");

    const message = {
        loading: "Загрузка...",
        success: "Спасибо! Скоро мы с вами свяжемся",
        failure: "Что-то пошло не так...",
    };

    const postData = async (url, data) => {
        document.querySelector(".status").textContent = message.loading;
        let res = await fetch(url, { method: "POST", body: data });
        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach((input) => {
            if (input.getAttribute("type") === "checkbox") {
                return (input.checked = false);
            } else {
                input.value = "";
            }
        });
        for (let key in state) {
            if (key === "type") {
                state[key] = "";
            }
            if (key === "form") {
                state[key] = 0;
            } else {
                state[key] = "";
            }
        }
    };

    const closeWindows = () => {
        const modalWindow = document.querySelector("inputs"),
            windows = document.querySelectorAll("[data-modal]");
        windows.forEach((item) => {
            item.style.display = "none";
        });
        document.body.style.overflow = "";
    };

    forms.forEach((item) => {
        item.addEventListener("submit", (e) => {
            e.preventDefault();
            let statusMessage = document.createElement("div");

            statusMessage.classList.add("status");
            item.appendChild(statusMessage);

            const formData = new FormData(item);

            if (item.getAttribute("data-calc") == "end") {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData("assets/server.php", formData)
                .then((res) => {
                    statusMessage.textContent = message.success;
                })
                .catch(() => {
                    statusMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 3000);
                    setTimeout(() => {
                        closeWindows();
                    }, 5000);
                });
        });
    });
};
export default forms;
