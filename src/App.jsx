import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Rules from "./Rules";
import Pick from "./Pick";
import Modal from "./Modal";
import Content from "./Content";
import triangle from "./assets/images/bg-pentagon.svg";
import rock from "./assets/images/icon-rock.svg";
import scissors from "./assets/images/icon-scissors.svg";
import paper from "./assets/images/icon-paper.svg";
import spock from "./assets/images/icon-spock.svg";
import lizard from "./assets/images/icon-lizard.svg";
import rules from "./assets/images/image-rules-bonus.svg";
import closeIcon from "./assets/images/icon-close.svg";
import logo from "./assets/images/logo-bonus.svg";

function App() {
	const [score, setScore] = useState(0);
	const gameBtns = ["rock", "paper", "scissors", "lizard", "spock"];
	let hotStyles =
		"rounded-full  w-[12rem] h-[12rem] border-[1rem] grid place-content-center cursor-pointer";
	const [gameButton, setGameButton] = useState();
	const [houseButton, setHouseButton] = useState();
	const [status, setStatus] = useState("");
	const [animate, setAnimate] = useState(false);

	const [modalShow, setModalShow] = useState(false);

	const toggleModal = function () {
		setModalShow(!modalShow);
	};

	const handleBtnClick = function (key) {
		setGameButton();
		setHouseButton();
		setAnimate(!animate);
		const newBtn = gameBtns
			.filter((gameBtn) => {
				return gameBtn === key;
			})
			.join("");
		setGameButton(newBtn);
		handleHousePick(newBtn);
	};

	const handleHousePick = function (newBtn, time = 1.2) {
		setTimeout(() => {
			const newHouseBtn = Math.floor(Math.random() * gameBtns.length);
			setHouseButton(gameBtns[newHouseBtn]);
			if (newBtn === gameBtns[newHouseBtn]) setStatus("tie");
			else if (
				(newBtn === "paper" &&
					(gameBtns[newHouseBtn] === "rock" ||
						gameBtns[newHouseBtn] === "spock")) ||
				(newBtn === "rock" &&
					(gameBtns[newHouseBtn] === "scissors" ||
						gameBtns[newHouseBtn] === "lizard")) ||
				(newBtn === "scissors" &&
					(gameBtns[newHouseBtn] === "paper" ||
						gameBtns[newHouseBtn] === "lizard")) ||
				(newBtn === "spock" &&
					(gameBtns[newHouseBtn] === "scissors" ||
						gameBtns[newHouseBtn] === "rock")) ||
				(newBtn === "lizard" &&
					(gameBtns[newHouseBtn] === "spock" ||
						gameBtns[newHouseBtn] === "paper"))
			) {
				setScore(score + 1);
				setStatus("you win");
				console.log("you win");
			} else {
				const updatedScore = score - 1;
				score ? setScore(updatedScore) : setScore(0);
				setStatus("you lose");
				console.log("you lose");
			}

			return gameBtns[newHouseBtn];
		}, time * 1000);
	};

	/* 
	const incrementScore = function () {
		setScore(score + 1);
	};

	const decrementScore = function () {
		const updatedScore = score - 1;
		score ? setScore(updatedScore) : setScore(0);
	}; */

	return (
		<main className="relative font-display min-h-screen p-2 max-w-[1440px] mx-auto bg-rd ">
			<Header score={score} logo={logo} />
			<Router>
				<Routes>
					<Route
						path="/"
						element={
							<Content
								gameBtns={gameBtns}
								handleBtnClick={handleBtnClick}
								triangle={triangle}
								paper={paper}
								scissors={scissors}
								rock={rock}
								lizard={lizard}
								spock={spock}
							/>
						}
					/>
					<Route
						path="/pick"
						element={
							<Pick
								animate={animate}
								setAnimate={setAnimate}
								status={status}
								setStatus={setStatus}
								styles={hotStyles}
								gameBtns={gameBtns}
								gameButton={gameButton}
								newHouseButton={houseButton}
								handleBtnClick={handleBtnClick}
								paper={paper}
								scissors={scissors}
								rock={rock}
								lizard={lizard}
								spock={spock}
							/>
						}
					/>
				</Routes>
			</Router>
			<Rules
				modalShow={modalShow}
				setModalShow={setModalShow}
				toggleModal={toggleModal}
			/>
			<Modal
				modalShow={modalShow}
				rules={rules}
				closeIcon={closeIcon}
				toggleModal={toggleModal}
			/>
		</main>
	);
}

export default App;
