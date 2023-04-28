const timer = (id, deadline) => {
    const addZero = (num) => {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    };
    const getTimeRemaining = (endTime) => {
        const total = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((total / 1000) % 60),
            minutes = Math.floor((total / 1000 / 60) % 60),
            hours = Math.floor((total / 1000 / 60 / 60) % 24),
            days = Math.floor(total / 1000 / 60 / 60 / 24);

        return {
            total,
            seconds,
            minutes,
            hours,
            days,
        };
    };

    const setClock = (selector, endTime) => {
        const timer = document.querySelector(selector),
            seconds = timer.querySelector("#seconds"),
            minutes = timer.querySelector("#minutes"),
            hours = timer.querySelector("#hours"),
            days = timer.querySelector("#days"),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endTime);

            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                days.textContent = "00";
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";

                clearInterval(timeInterval);
            }
        }
    };
    setClock(id, deadline);
};
export default timer;
