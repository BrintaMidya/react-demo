import React from "react";
import SpringBootServer from "../API/SpringBootServer";
import ReviewDisplay from "./ReviewDisplay";

class ProductDisplay extends React.Component {
	state = { reviews: [] };

	showReviews = () => {
		SpringBootServer.get("/products/" + this.props.prod.id + "/reviews").then(
			(res) => {
				console.log(res);
				this.setState({ reviews: res.data });
			}
		);
	};

	render() {
		let product = this.props.prod;
		return (
			<div>
				<div className="ui card">
					<div className="content">
						<a className="header">{product.name}</a>
					</div>
					<div className="extra content">
						<a>{product.price}</a>
					</div>
					<div className="extra content">
						<a>{product.qoh}</a>
					</div>
					<div className="extra content">
						<button className="ui button" onClick={this.showReviews}>
							Show Reviews
						</button>
					</div>
					<div className="extra content">
						{this.state.reviews.map((review) => {
							return <ReviewDisplay key={review.id} reviewInfo={review} />;
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default ProductDisplay;
