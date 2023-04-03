import React from "react";

const Rules = ({ toggleModal }) => {
	return (
		<button
			className="absolute z-30 right-[2rem] bottom-[2rem] border-2 border-borderHeader ml-auto px-7 py-2 rounded-lg text-borderHeader uppercase bg-rules"
			onClick={toggleModal}
		>
			rules
		</button>
	);
};

export default Rules;
