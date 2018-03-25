import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import StickyNote from './StickyNote'

class Sticker extends Component {  

    render() {
        let target = this.props.target;
        let stickyNoteArray = this.props.stickyArray.get(target); 
        let stickyNotes = stickyNoteArray.map((elem,index)=>{
            return  (
                <StickyNote
                    paper={target}
                    id={index}
                    key={index} 
                    value={elem}
                >
                </StickyNote>
            );
        });
        return <Wrapper>
               {stickyNotes}
          </Wrapper>;
     }

};
const mapStateToProps = state => {
    return {
        stickyArray: state.stickyNote
    }
}
export default connect(mapStateToProps)(Sticker);
// 黏到store
 

const Wrapper= styled.div`
     display:flex;
     flex-direction:column;
     align-items: center;
`;