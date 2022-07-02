import React, { useState } from "react";

function Time() {

    setInterval(updateTime, 1000);

const now = new Date().toLocaleTimeString();

const [time, setTime] = useState(now);

function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
}
var Night = new Date().getHours();

return (
    <div>
    <p className="clock" style = { {color: Night > 17 && '#525E75'} }>
    {time}</p>
    </div>
);
}

export default Time;