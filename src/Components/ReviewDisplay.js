import React from "react";

class ReviewDisplay extends React.Component {
	render() {
		let review = this.props.reviewInfo;
		return (
			<div className="ui cards">
				<div className="card">
					<div className="content">
						<div className="header">{review.reviewer}</div>
						<div className="meta">customer</div>
						<div className="description">{review.reviewText}</div>
						<div className="description">Rating: {review.rating}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ReviewDisplay;
