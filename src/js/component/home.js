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
		a1: "",
		a2: null,
		a3: null,
		b1: null,
		b2: null,
		b3: null,
		c1: null,
		c2: null,
		c3: null
	};

	checkpoint(e) {
		if (this.virtualB[e.target.id] === "") {
			// e.target.innerHTML = this.state.player;
			this.virtualB[e.target.id] = this.state.player;
			if (this.state.player === "X") {
				this.setState({ player: "O" });
			}
			if (this.state.player === "O") {
				this.setState({ player: "X" });
			}
		}
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="offset-3 col-6 mt-5">
						<div className="row">
							<div
								id="a1"
								className="col border border-3 border-dark"
								onClick={e => this.checkpoint(e)}>
								{this.virtualB.a1}
							</div>
							<div
								id="a2"
								className="col border border-3 border-dark"
								onClick={e => this.checkpoint(e)}
							/>
							<div
								id="a3"
								className="col border border-3 border-dark"
								onClick={e => this.checkpoint(e)}
							/>
						</div>
						<div className="row">
							<div
								id="b1"
								className="col border border-3 border-dark"
								onClick={e => this.checkpoint(e)}
							/>
							<div
								id="b2"
								className="col border border-3 border-dark"
								onClick={e => this.checkpoint(e)}
							/>
							<div
								id="b3"
								className="col border border-3 border-dark"
								onClick={e => this.checkpoint(e)}
							/>
						</div>
						<div className="row">
							<div
								id="c1"
								className="col border border-3 border-dark"
								onClick={e => this.checkpoint(e)}
							/>
							<div
								id="c2"
								className="col border border-3 border-dark"
								onClick={e => this.checkpoint(e)}
							/>
							<div
								id="c3"
								className="col border border-3 border-dark"
								onClick={e => this.checkpoint(e)}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
