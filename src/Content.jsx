import React from "react";
import { Link } from "react-router-dom";
import GameBtns from "./GameBtns";

const Content = ({
	triangle,
	rock,
	paper,
	scissors,
	lizard,
	spock,
	gameBtns,
	handleBtnClick,
}) => {
	return (
		<Link to="pick">
			<GameBtns
				triangle={triangle}
				rock={rock}
				paper={paper}
				scissors={scissors}
				lizard={lizard}
				spock={spock}
				gameBtns={gameBtns}
				handleBtnClick={handleBtnClick}
			/>
		</Link>
	);
};

export default Content;
