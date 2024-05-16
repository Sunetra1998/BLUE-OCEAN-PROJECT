import { useState } from "react";
import "./Card2.scss";
import ToggleButton from "react-toggle-button";
import { FaEllipsisVertical } from "react-icons/fa6";

const Card2 = ({ riskScenario, riskId, tagKey, tagValue }) => {
  const [value, setValue] = useState(false);
  return (
    <div className="card2">
      <div className="card2-header">
        <div className="card2-header_left">
          {riskId || "-"}
          <span>
            {tagKey}:{tagValue}
          </span>
        </div>
        <div className="card2-header_right">
          <div>Last Updated: 08 Jan, 2024</div>
          <div className="checkbox">
            <ToggleButton
              value={value || false}
              onToggle={() => {
                setValue((value) => !value);
              }}
            />
            <span>{value ? "Enabled" : "Disabled"}</span>
          </div>
          <FaEllipsisVertical />
        </div>
      </div>
      <div className="card-body">
        <p>{riskScenario}</p>
      </div>
    </div>
  );
};

export default Card2;
