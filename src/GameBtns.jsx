import React from "react";
import GameBtn from "./GameBtn";

const GameBtns = ({
	gameBtns,
	rock,
	paper,
	scissors,
	triangle,
	lizard,
	spock,
	handleBtnClick,
}) => {
	return (
		<section className="mx-auto text-white text-3xl flex flex-col items-center justify-center pt-[6rem] gap-4 max-w-[40rem]">
			<div className="relative">
				{gameBtns.map((gameBtn, i) => {
					return (
						<div key={gameBtn} onClick={() => handleBtnClick(gameBtn)}>
							<GameBtn
								gameBtn={gameBtn}
								rock={rock}
								paper={paper}
								scissors={scissors}
								lizard={lizard}
								spock={spock}
							/>
						</div>
					);
				})}

				<img className="max-w-full" src={triangle} alt="" />
			</div>
		</section>
	);
};

export default GameBtns;
