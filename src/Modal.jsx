import React from "react";
import RulesModal from "./RulesModal";

const Modal = ({ modalShow, rules, closeIcon, toggleModal }) => {
	if (!modalShow) return null;

	return (
		<div
			className="fixed grid place-content-center top-0 bottom-0 left-0 right-0 text-2xl bg-modal"
			onClick={toggleModal}
		>
			<RulesModal
				rules={rules}
				closeIcon={closeIcon}
				toggleModal={toggleModal}
			/>
		</div>
	);
};

export default Modal;
