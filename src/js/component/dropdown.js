import React from "react";
import ReactDOM from "react-dom";

const Mario =
	"http://icons.iconarchive.com/icons/ph03nyx/super-mario/128/Retro-Mario-icon.png";
const Bowser =
	"http://lostcoastoutpost.com/media/uploads/daydescription/308/Smb1_bowser.png";

export class Drops extends React.Component {
	constructor() {
		super();
	}

	handleClick = () => {
		window.location.reload(false);
	};
	render() {
		return (
			<div className="container2">
				<div className="B-background">
					<span className="winnerX">
						<img className="Mario" src={Mario} />
						You Win Mario!
					</span>

					<span className="winnerO pr-5">
						<img className="Bowser" src={Bowser} />
						How unfortunate, Bowser Wins
					</span>

					<button
						type="button"
						onClick={this.handleClick}
						className="btn btn-danger btn-lg">
						Play Again?
					</button>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<Drops />, document.querySelector("#app"));
