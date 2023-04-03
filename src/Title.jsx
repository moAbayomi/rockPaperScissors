import React from "react";

const Title = ({ logo }) => {
	return (
		<div className="text-2xl font-bold text-white">
			<img src={logo} alt="" />
		</div>
	);
};

export default Title;
