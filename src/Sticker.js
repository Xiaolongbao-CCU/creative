import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import StickyNote from './StickyNote'

class Sticker extends Component {  

    render() {
        let stickyNotes = this.props.stickyArray.map((elem,index)=>{
            return  (
                        <StickyNote
                            aaa={5666}
                            id={index}
                            key={index} 
                            value={elem}
                            onChange={(e)=>{
                                    this.props.dispatch({ 
                                        type:'editStickyNote', 
                                        data: e.target.value,
                                        key: e.target.id 
                                    });
                            }}
                            // onKeyUp={(e) => { this.auto_grow(e.target)}}>
                            >
                        </StickyNote>
                    );
          });
          return <Wrapper className='container'
          >
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