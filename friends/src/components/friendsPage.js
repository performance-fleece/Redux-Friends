import React from 'react';
import { connect } from 'react-redux';
// import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';

import { getData } from '../actions'

class friendsPage extends React.Component {
    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <div className="friends-list">
                Friends placeholder

            </div>
        )
    }
}

export default friendsPage