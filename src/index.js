import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import List from './components/List'
import Detail from './components/Detail';

const API_KEY = 'AIzaSyCSOSU2Ox73tELMPCCfHrt8nm3U8BiORsY';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('Pamela');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term}, videos => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		return (
		  <div>
			    <SearchBar
			      onSearchTermChange={ term => this.videoSearch(term)}
			    />
				<Detail
				  video={ this.state.selectedVideo }
				/>
				<List
				  onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
				  videos={ this.state.videos }
				/>
		  </div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));