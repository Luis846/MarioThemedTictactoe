import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			player: "X"
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
		let WinnerX = () =>
			alert("Player X Wins, Better luck next time Player O!");
		let WinnerO = () =>
			alert("Player O Wins, Better luck next time Player X!");

		if (
			(this.virtualB.a1 === "X" &&
				this.virtualB.a2 === "X" &&
				this.virtualB.a3 === "X") ||
			(this.virtualB.b1 === "X" &&
				this.virtualB.b2 === "X" &&
				this.virtualB.b3 === "X") ||
			(this.virtualB.c1 === "X" &&
				this.virtualB.c2 === "X" &&
				this.virtualB.c3 === "X") ||
			(this.virtualB.a1 === "X" &&
				this.virtualB.b1 === "X" &&
				this.virtualB.c1 === "X") ||
			(this.virtualB.a2 === "X" &&
				this.virtualB.b2 === "X" &&
				this.virtualB.c2 === "X") ||
			(this.virtualB.a3 === "X" &&
				this.virtualB.b3 === "X" &&
				this.virtualB.c3 === "X") ||
			(this.virtualB.a1 === "X" &&
				this.virtualB.b2 === "X" &&
				this.virtualB.c3 === "X") ||
			(this.virtualB.a3 === "X" &&
				this.virtualB.b2 === "X" &&
				this.virtualB.c1 === "X")
		) {
			setTimeout(() => {
				WinnerX();
			}, 1000);

			setTimeout(() => {
				window.location.reload();
			}, 2000);
		} else if (
			(this.virtualB.a1 === "O" &&
				this.virtualB.a2 === "O" &&
				this.virtualB.a3 === "O") ||
			(this.virtualB.b1 === "O" &&
				this.virtualB.b2 === "O" &&
				this.virtualB.b3 === "O") ||
			(this.virtualB.c1 === "O" &&
				this.virtualB.c2 === "O" &&
				this.virtualB.c3 === "O") ||
			(this.virtualB.a1 === "O" &&
				this.virtualB.b1 === "O" &&
				this.virtualB.c1 === "O") ||
			(this.virtualB.a2 === "O" &&
				this.virtualB.b2 === "O" &&
				this.virtualB.c2 === "O") ||
			(this.virtualB.a3 === "O" &&
				this.virtualB.b3 === "O" &&
				this.virtualB.c3 === "O") ||
			(this.virtualB.a1 === "O" &&
				this.virtualB.b2 === "O" &&
				this.virtualB.c3 === "O") ||
			(this.virtualB.a3 === "O" &&
				this.virtualB.b2 === "O" &&
				this.virtualB.c1 === "O")
		) {
			setTimeout(() => {
				WinnerO();
			}, 1000);
		}
	};
	checkpoint(e) {
		if (this.virtualB[e.target.id] === "") {
			// e.target.innerHTML = this.state.player; use this  line is going to use null instead of ""
			this.virtualB[e.target.id] = this.state.player;
			this.gameOver();
			if (this.state.player === "X") {
				this.setState({ player: "O" });
			}
			if (this.state.player === "O") {
				this.setState({ player: "X" });
			}
		}

		let counter = 0;
		for (let key in this.virtualB) {
			if (this.virtualB[key] !== "") {
				counter++;
			}
		}

		//alerts after 1 second to let the check on board before alert is called
		setTimeout(() => {
			if (counter === 9) {
				alert("Game Over, Everyone's a Loser :(");
			}
		}, 1000);
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="offset-3 col-6 mt-5">
						<div className="row">
							<div
								id="a1" //delete this.virtualb line if using null
								className="col border border-3 border-dark"
								onClick={e => this.checkpoint(e)}>
								{this.virtualB.a1}
							</div>
							<div
								id="a2"
								className="col border border-3 border-dark"
								onClick={e => this.checkpoint(e)}>
								{this.virtualB.a2}
							</div>
							<div
								id="a3"
								className="col border border-3 border-dark"
								onClick={e => this.checkpoint(e)}>
								{this.virtualB.a3}
							</div>
						</div>

						<div className="row">
							<div
								id="b1"
								className="col border border-3 border-dark"
								onClick={e => this.checkpoint(e)}>
								{this.virtualB.b1}
							</div>
							<div
								id="b2"
								className="col border border-3 border-dark"
								onClick={e => this.checkpoint(e)}>
								{this.virtualB.b2}
							</div>
							<div
								id="b3"
								className="col border border-3 border-dark"
								onClick={e => this.checkpoint(e)}>
								{this.virtualB.b3}
							</div>
						</div>

						<div className="row">
							<div
								id="c1"
								className="col border border-3 border-dark"
								onClick={e => this.checkpoint(e)}>
								{this.virtualB.c1}
							</div>
							<div
								id="c2"
								className="col border border-3 border-dark"
								onClick={e => this.checkpoint(e)}>
								{this.virtualB.c2}
							</div>
							<div
								id="c3"
								className="col border border-3 border-dark"
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
