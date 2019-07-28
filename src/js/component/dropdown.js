import React from "react";
import ReactDOM from "react-dom";

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
					<span className="winnerX pr-5">You Win Player X:</span>

					<span className="winnerO pr-5">You Win Player O:</span>

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
