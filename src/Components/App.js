import React from "react";
import User from "./User";
import MyTable from "./MyTable";

class App extends React.Component {
	state = {
		data: [
			{ id: 1, name: "brinta" },
			{ id: 2, name: "Rakuten" },
			{ id: 3, name: "Walter" },
			{ id: 4, name: "Kevin" },
			{ id: 5, name: "Jesse" },
		],
	};

	componentDidMount() {
		console.log("fetching position..");
		window.navigator.geolocation.getCurrentPosition((position) => {
			console.log("Latitude: ", position.coords.latitude);
			console.log("Longitude: ", position.coords.longitude);
		});
		console.log("fetched position..");
	}

	render() {
		return (
			<div className="ui container">
				<h1>Hola, Rakuten !</h1>
				{this.state.data.map((userobj) => {
					return (
						<User
							key={userobj.id}
							innerText={"coming from app js"}
							id={userobj.id}
							username={userobj.name}
						/>
					);
				})}
			</div>
		);
	}
}

export default App;
