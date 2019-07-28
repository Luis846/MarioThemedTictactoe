import React from "react";
import { Drops } from "./dropdown.js";

const Mario = (
	<img src="http://icons.iconarchive.com/icons/ph03nyx/super-mario/128/Retro-Mario-icon.png" />
);
const Bowser = (
	<img
		src="http://lostcoastoutpost.com/media/uploads/daydescription/308/Smb1_bowser.png"
		style={{ width: "128px", height: "128px" }}
	/>
);

const Question = (
	<img src="http://icons.iconarchive.com/icons/ph03nyx/super-mario/128/Retro-Block-Question-icon.png" />
);

// const musicOnePlay = () => {
// 	startMusic();
// };

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			player: Mario,
			winner: null
		};
	}

	virtualB = {
		a1: "", //if choose to do other way use null instead of ''
		a2: "",
		a3: "",
		b1: "",
		b2: "",
		b3: "",
		c1: "",
		c2: "",
		c3: ""
	};

	gameOver = () => {
		let button = document.querySelector("button");
		let bBbackground = document.querySelector(".B-background");
		let playerX = document.querySelector(".winnerX");
		let playerO = document.querySelector(".winnerO");
		let playerZero = document.querySelector(".winnerZero");

		let WinnerX = () => {
			bBbackground.style.visibility = "visible";
			button.style.visibility = "visible";
			playerX.style.visibility = "visible";
		};
		let WinnerO = () => {
			bBbackground.style.visibility = "visible";
			button.style.visibility = "visible";
			playerO.style.visibility = "visible";
		};

		let WinnerZero = () => {
			bBbackground.style.visibility = "visible";
			button.style.visibility = "visible";
			playerZero.style.visibility = "visible";
		};

		if (
			(this.virtualB.a1 === Mario &&
				this.virtualB.a2 === Mario &&
				this.virtualB.a3 === Mario) ||
			((this.virtualB.b1 === Mario &&
				this.virtualB.b2 === Mario &&
				this.virtualB.b3 === Mario) ||
				(this.virtualB.c1 === Mario &&
					this.virtualB.c2 === Mario &&
					this.virtualB.c3 === Mario) ||
				(this.virtualB.a1 === Mario &&
					this.virtualB.b1 === Mario &&
					this.virtualB.c1 === Mario) ||
				(this.virtualB.a2 === Mario &&
					this.virtualB.b2 === Mario &&
					this.virtualB.c2 === Mario) ||
				(this.virtualB.a3 === Mario &&
					this.virtualB.b3 === Mario &&
					this.virtualB.c3 === Mario) ||
				(this.virtualB.a1 === Mario &&
					this.virtualB.b2 === Mario &&
					this.virtualB.c3 === Mario) ||
				(this.virtualB.a3 === Mario &&
					this.virtualB.b2 === Mario &&
					this.virtualB.c1 === Mario))
		) {
			// WinnerX();
			this.setState({ winner: Mario });
			setTimeout(() => {
				WinnerX();
			}, 100);

			// setTimeout(() => {
			// 	window.location.reload();
			// }, 2000);
		} else if (
			(this.virtualB.a1 === Bowser &&
				this.virtualB.a2 === Bowser &&
				this.virtualB.a3 === Bowser) ||
			(this.virtualB.b1 === Bowser &&
				this.virtualB.b2 === Bowser &&
				this.virtualB.b3 === Bowser) ||
			(this.virtualB.c1 === Bowser &&
				this.virtualB.c2 === Bowser &&
				this.virtualB.c3 === Bowser) ||
			(this.virtualB.a1 === Bowser &&
				this.virtualB.b1 === Bowser &&
				this.virtualB.c1 === Bowser) ||
			(this.virtualB.a2 === Bowser &&
				this.virtualB.b2 === Bowser &&
				this.virtualB.c2 === Bowser) ||
			(this.virtualB.a3 === Bowser &&
				this.virtualB.b3 === Bowser &&
				this.virtualB.c3 === Bowser) ||
			(this.virtualB.a1 === Bowser &&
				this.virtualB.b2 === Bowser &&
				this.virtualB.c3 === Bowser) ||
			(this.virtualB.a3 === Bowser &&
				this.virtualB.b2 === Bowser &&
				this.virtualB.c1 === Bowser)
		) {
			// WinnerO();
			this.setState({ winner: Bowser });
			setTimeout(() => {
				WinnerO();
			}, 100);
		}
		let counter = 0;
		for (let key in this.virtualB) {
			if (this.virtualB[key] !== "") {
				counter++;
			}
		}

		// alerts after 1 second to let the check on board before alert is called

		if (counter === 9) {
			this.setState({ winner: null });
			setTimeout(() => {
				WinnerZero();
			}, 100);
		}
	};
	checkpoint(e) {
		if (this.virtualB[e.target.id] === "") {
			// e.target.innerHTML = this.state.player; use this  line is going to use null instead of ""
			this.virtualB[e.target.id] = this.state.player;
			this.gameOver();
			if (this.state.player === Mario) {
				this.setState({ player: Bowser });
			}
			if (this.state.player === Bowser) {
				this.setState({ player: Mario });
			}
		}
	}

	render() {
		return (
			<div className="container">
				<div className="drops">
					<audio autoPlay>
						<source
							src="http://23.237.126.42/ost/super-mario-bros/khbnvkqp/01%20-%20Super%20Mario%20Bros.mp3"
							type="audio/mp3"
						/>
					</audio>
					<Drops />
				</div>
				<div className="row">
					<div className="offset-3 col-6 mt-4">
						<div className="row">
							<div
								id="a1" //delete this.virtualb line if using null
								className="col border border-4 border-white display-1 text-center pt-4 shadow"
								onClick={e => this.checkpoint(e)}>
								{this.virtualB.a1}
							</div>
							<div
								id="a2"
								className="col border border-4 border-white display-1 text-center pt-4 shadow"
								onClick={e => this.checkpoint(e)}>
								{this.virtualB.a2}
							</div>
							<div
								id="a3"
								className="col border border-4 border-white display-1 text-center pt-4 shadow"
								onClick={e => this.checkpoint(e)}>
								{this.virtualB.a3}
							</div>
						</div>

						<div className="row">
							<div
								id="b1"
								className="col border border-4 border-white display-1 text-center pt-4 shadow"
								onClick={e => this.checkpoint(e)}>
								{this.virtualB.b1}
							</div>
							<div
								id="b2"
								className="col border border-4 border-white display-1 text-center pt-4 shadow"
								onClick={e => this.checkpoint(e)}>
								{this.virtualB.b2}
							</div>
							<div
								id="b3"
								className="col border border-4 border-white display-1 text-center pt-4 shadow"
								onClick={e => this.checkpoint(e)}>
								{this.virtualB.b3}
							</div>
						</div>

						<div className="row">
							<div
								id="c1"
								className="col border border-4 border-white display-1 text-center pt-4 shadow"
								onClick={e => this.checkpoint(e)}>
								{this.virtualB.c1}
							</div>
							<div
								id="c2"
								className="col border border-4 border-white display-1 text-center pt-4 shadow"
								onClick={e => this.checkpoint(e)}>
								{this.virtualB.c2}
							</div>
							<div
								id="c3"
								className="col border border-4 border-white display-1 text-center pt-4 shadow"
								onClick={e => this.checkpoint(e)}>
								{this.virtualB.c3}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
