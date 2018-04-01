import React from "react";
import "./ClickCard.css";

const ClickCard = props => (
       <div>
		<div className="card" onClick={() => props.tallyScore(props.id)}>
			<img alt={props.id} src={props.image} />
		</div>
      </div>
);

export default ClickCard;