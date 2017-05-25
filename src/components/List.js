import React, { Component } from 'react';
import Item from './Item';

const List = (props) => {
	const Items = props.videos.map(video => {
		return (
		  <Item key={video.etag}
		        onVideoSelect={props.onVideoClick}
		        video={video} />
		);
	});

	return (
	    <ul className="col-md-4 list-group">
		    {Items}
	    </ul>
	);
};

export default List;