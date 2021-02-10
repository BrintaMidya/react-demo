import React from "react";
import "./User.css";

class User extends React.Component {
	componentDidMount() {
		//console.log(this.props.username);
	}

	render() {
		return (
			<h1 className="blue">
				{this.props.innerText + this.props.id + this.props.username}
			</h1>
		);
	}
}

export default User;
