import React from "react";
import GameBtn from "./GameBtn";
import { Link } from "react-router-dom";

const Pick = ({
	styles,
	status,
	setStatus,
	animate,
	setAnimate,
	rock,
	paper,
	scissors,
	lizard,
	spock,
	gameButton,
	newHouseButton,
}) => {
	return (
		<section className="relative mx-auto text-white text-3xl flex items-center justify-center pt-[7rem] gap-4 max-w-[40rem]">
			<div
				className={`${
					status === "" ? "translate-x-[6rem]" : ""
				} transition-all duration-100 grid place-content-center rounded-full h-[12rem] w-[12rem] bg-darktxt relative before:absolute before:content-['you_picked'] before:uppercase before:font-medium before:-top-[3rem] before:text-xl before:text-white before:whitespace-nowrap before:left-[3rem]`}
			>
				<GameBtn
					styles={styles}
					animate={animate}
					status={status}
					gameBtn={gameButton}
					rock={rock}
					paper={paper}
					lizard={lizard}
					spock={spock}
					scissors={scissors}
				/>
			</div>
			<div
				className={`${
					status === "" ? "scale-0" : ""
				} transition-all duration-100 text-center mx-8`}
			>
				<h1 className="uppercase mb-4 whitespace-nowrap">{status}</h1>
				<Link to="/">
					<button
						className={`${
							status === "you lose" ? "text-red-400" : ""
						} uppercase bg-white rounded-lg whitespace-nowrap text-sm text-black py-3 px-[3rem] cursor-pointer`}
						onClick={() => {
							setAnimate(false);
							setStatus("");
						}}
					>
						play again
					</button>
				</Link>
			</div>
			<div
				className={`${
					status === "" ? "-translate-x-[6rem]" : ""
				} transition-all duration-100 grid place-content-center rounded-full h-[12rem] w-[12rem] bg-darktxt relative before:absolute before:content-['the_house_picked'] before:uppercase before:left-4 before:font-medium before:-top-[3rem] before:text-xl before:text-white before:whitespace-nowrap`}
			>
				<GameBtn
					styles={styles}
					status={status}
					gameBtn={newHouseButton}
					rock={rock}
					paper={paper}
					scissors={scissors}
					lizard={lizard}
					spock={spock}
				/>
			</div>
		</section>
	);
};

export default Pick;
