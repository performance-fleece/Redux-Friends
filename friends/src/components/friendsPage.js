import React from 'react';
import { connect } from 'react-redux';
// import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';

import { getData } from '../actions';
import FriendsList from './FriendsList';
import Friend from './Friend';

class friendsPage extends React.Component {
	componentDidMount() {
		this.props.getData();
	}

	render() {
		return (
			<div className="friends-list">
				<h1>FriendsBook</h1>
				<div>
					<button>Add Friend</button>
				</div>
				<FriendsList friends={this.props.friends} />
			</div>
		);
	}
}

const mapStateToProps = ({ friends, fetchingFriends }) => ({
	friends,
	fetchingFriends
});

export default withRouter(
	connect(
		mapStateToProps,
		{ getData }
	)(friendsPage)
);
