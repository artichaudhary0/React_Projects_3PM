import React, { useEffect, useRef, useState } from "react";

const Clock1 = () => {
  const [time, setTime] = useState(new Date());
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Format : HH:MM:SS AM/PM

  const formatTime = (data) => {
    let hours = data.getHours(); // 4
    const minutes = data.getMinutes().toString().padStart(2, "0"); // 04 : 01 : 05
    const seconds = data.getSeconds().toString().padStart(2, "0");

    const amPm = hours >= 12 ? "PM" : "AM";

    // 24H 12H
    hours = hours % 12; // 1%12 => 1 , 2%12 = 2  ... 12%12 => 0 , 13%12 => 1 14%12 = 2
    return `${hours} : ${minutes} : ${seconds} : ${amPm}`;
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const setGreeting = (hours) => {
    if (hours < 12) return "Good Morning";
    if (hours < 16) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div>
      <div>{setGreeting(time.getHours())}</div>
      <div>{formatTime(time)}</div>
      <div>{formatDate(time)}</div>
    </div>
  );
};

export default Clock1;
