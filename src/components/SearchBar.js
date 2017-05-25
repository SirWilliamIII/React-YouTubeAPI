import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { text: '' };
	}
	render() {
		return (
		        <div className="search-bar">
			        <div className="row">
				        <div className="col-md-3">
							<input
								value={this.state.term}
								onChange={event => this.onInputChange(event.target.value)}
							/>
				        </div>
			        </div>
				</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

