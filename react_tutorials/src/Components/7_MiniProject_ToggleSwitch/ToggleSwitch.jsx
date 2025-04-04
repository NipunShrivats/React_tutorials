import React, { useState } from "react";
import "./ToggleSwitch.css";

import { MdFlashlightOn } from "react-icons/md";
import { MdFlashlightOff } from "react-icons/md";

export default function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);
  let handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  const checkIsOn = isOn ? "on" : "off";
  const checkColor = isOn ? "green" : "red";

  return (
    <>
      <div className="toggle-switch" onClick={handleToggleSwitch}>
        <div className="switch" style={{ backgroundColor: checkColor }}>
          <span className={`switch-state ${checkIsOn}`}>
            {isOn ? <MdFlashlightOn /> : <MdFlashlightOff />}
          </span>
        </div>
      </div>
    </>
  );
}
