import React from "react";
import Title from "./Title";
import Score from "./Score";

const Header = ({ score, logo }) => {
	return (
		<header className="text-2xl uppercase mt-4 p-4 flex items-center justify-between max-w-[40rem] mx-auto border-4 rounded-xl border-borderHeader">
			<Title logo={logo} />
			<Score score={score} />
		</header>
	);
};

export default Header;
