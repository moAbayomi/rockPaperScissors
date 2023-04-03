import React from "react";

const Score = ({ score }) => {
	return (
		<div
			id="score"
			className="bg-white text-xl font-bold rounded-xl flex flex-col items-center justify-center p-6 uppercase"
		>
			<p className="text-score">score</p>
			<p className="text-5xl text-darktxt">{score}</p>
		</div>
	);
};

export default Score;
