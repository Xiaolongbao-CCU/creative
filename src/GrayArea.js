import React, { Component } from 'react';
import styled from 'styled-components';
// import { connect } from 'react-redux';

class GrayArea extends Component {
    render() {

        return (
            <GrayAreaTheme/>
        )
    }
}

export default GrayArea;

const GrayAreaTheme = styled.div`
    display: none;
    position: fixed;
    width: 100%;
    height: 50%;
    top: 50%;
    transform: translateY(-50%);
    background-color: gray;
`