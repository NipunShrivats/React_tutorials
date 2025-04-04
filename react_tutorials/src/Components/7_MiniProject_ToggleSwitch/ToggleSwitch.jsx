import React, { useState } from "react";
import "./ToggleSwitch.css";

import { MdFlashlightOn } from "react-icons/md";
import { MdFlashlightOff } from "react-icons/md";

export default function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);
  let handleToggleSwitch = () => {
    setIsOn(!isOn);
  };
  return (
    <>
      <div className="toggle-switch" onClick={handleToggleSwitch}>
        <div
          className="switch"
          style={{ backgroundColor: isOn ? "green" : "red" }}
        >
          <span className={`switch-state ${isOn ? "on" : "off"}`}>
            {isOn ? <MdFlashlightOn /> : <MdFlashlightOff />}
          </span>
        </div>
      </div>
    </>
  );
}
