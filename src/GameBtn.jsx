import React from "react";

const GameBtn = ({
	styles,
	gameBtn,
	rock,
	paper,
	scissors,
	lizard,
	spock,
	animate,
}) => {
	if (gameBtn === "rock")
		return (
			<div
				className={
					styles
						? styles +
						  ` ${
								animate === true
									? " buttonRock border-buttonRock animate-ping"
									: " buttonRock border-buttonRock"
						  } `
						: "absolute -top-[4.5rem] right-[5.5rem] w-[8rem] h-[8rem] rounded-full border-[1rem] grid place-content-center buttonRock border-buttonRock cursor-pointer"
				}
			>
				<img
					className={styles ? "max-w-full  h-30 w-30" : "max-w-full"}
					src={rock}
					alt=""
				/>
			</div>
		);

	if (gameBtn === "paper")
		return (
			<div
				className={
					styles
						? styles +
						  ` ${
								animate === true
									? " buttonPaper border-buttonPaper animate-ping"
									: " buttonPaper border-buttonPaper"
						  } `
						: "absolute top-[3rem] -left-[3rem] w-[8rem] h-[8rem] rounded-full border-[1rem] grid place-content-center buttonPaper border-buttonPaper cursor-pointer"
				}
			>
				<img
					className={styles ? "max-w-full h-30 w-30" : "max-w-full"}
					src={paper}
					alt=""
				/>
			</div>
		);

	if (gameBtn === "scissors")
		return (
			<div
				className={
					styles
						? styles +
						  ` ${
								animate === true
									? " buttonScissors border-buttonScissors animate-ping"
									: " buttonScissors border-buttonScissors"
						  } `
						: "absolute top-[3rem] -right-[3rem] w-[8rem] h-[8rem] rounded-full border-[1rem] grid place-content-center buttonScissors border-buttonScissors cursor-pointer"
				}
			>
				<img
					className={styles ? "max-w-full h-30 w-30" : "max-w-full"}
					src={scissors}
					alt=""
				/>
			</div>
		);

	if (gameBtn === "spock")
		return (
			<div
				className={
					styles
						? styles +
						  ` ${
								animate === true
									? " buttonSpock border-buttonSpock animate-ping"
									: " buttonSpock border-buttonSpock"
						  } `
						: "absolute -bottom-[2rem] w-[8rem] h-[8rem] rounded-full border-[1rem] grid place-content-center buttonSpock border-buttonSpock cursor-pointer"
				}
			>
				<img
					className={styles ? "max-w-full h-30 w-30" : "max-w-full"}
					src={spock}
					alt=""
				/>
			</div>
		);

	if (gameBtn === "lizard")
		return (
			<div
				className={
					styles
						? styles +
						  ` ${
								animate === true
									? " buttonLizard border-buttonLizard animate-ping"
									: " buttonLizard border-buttonLizard"
						  } `
						: "absolute -bottom-[2rem] -right-[2rem] w-[8rem] h-[8rem] rounded-full border-[1rem] grid place-content-center buttonLizard border-buttonLizard cursor-pointer"
				}
			>
				<img
					className={styles ? "max-w-full h-30 w-30" : "max-w-full"}
					src={lizard}
					alt=""
				/>
			</div>
		);
};

export default GameBtn;
