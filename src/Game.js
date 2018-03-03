import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

class Game extends Component {
    constructor (props) {
        super (props)
    }
    render() {
        return (
            <div>
                {console.log(this.props.roomID)}
                123
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        roomID: state,
    }
}
export default withRouter(connect(mapStateToProps)(Game));