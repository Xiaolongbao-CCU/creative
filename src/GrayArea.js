
import styled from 'styled-components';
// import { connect } from 'react-redux';

const GrayArea = styled.div`
    display: ${props => props.display};
    position: fixed;
    width: 100%;
    height: 50%;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(192,192,192,0.95);
    z-index: 1000;
    span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        color: white;
        font-size: 3em;
    }
`
export default GrayArea;

