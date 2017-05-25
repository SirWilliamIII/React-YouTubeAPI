import React from 'react';

const Item = ({video, onVideoSelect}) => {

	const imageUrl = video.snippet.thumbnails.default.url;

	return (
	  <div onClick={() => onVideoSelect(video)} className="list-group-item">
		  <div className="row">
			  <div className="col-md-12 offset-md-4">
				  <div className="video-list-media">
					  <div className="media-left">
						  <img className="media-object" src={imageUrl}/>
					  </div>
					  <div className="media-body">
						  <div className="media-heading">{video.snippet.title}</div>
					  </div>
				  </div>
			  </div>
		  </div>
	  </div>
	);

};

export default Item;