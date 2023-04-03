import React from "react";

const RulesModal = ({ rules, closeIcon, toggleModal }) => {
	return (
		<div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 grid place-content-center gap-12 bg-white p-12 rounded-lg">
			<div className="flex justify-between items-center">
				<h1 className="text-2xl font-bold uppercase ">rules</h1>
				<button
					className="cursor-pointer border-8 border-white"
					onClick={toggleModal}
				>
					<img src={closeIcon} alt="" />
				</button>
			</div>
			<img src={rules} alt="" />
		</div>
	);
};

export default RulesModal;
