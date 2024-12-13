import React, { useEffect, useState } from "react";
const CountdownTime = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                Mins: Math.floor((difference / 1000 / 60) % 60),
                Secs: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    const formatNumber = (number) => {
        return String(number).padStart(2, "0");
    };

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (timeLeft[interval] !== undefined) {
            timerComponents.push(
                <span key={interval} className="min-w-24 rounded bg-white px-1 py-1 text-center md:min-w-28 lg:min-w-28 ">
                    {formatNumber(timeLeft[interval])}
                    <span className="text-lg text-chicago-400"> {interval}</span>
                </span>,
            );
        }
    });

    return timerComponents;
};

export default CountdownTime;
