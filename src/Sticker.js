import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import StickyNote from './StickyNote'

class Sticker extends Component {  

    render() {
        let stickyNotes = this.props.stickyArray.map((elem,index)=>{
            return  (
                        <StickyNote
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
          return <Wrapper className='container' //ref={this.dragulaDecorator}
          >
               {stickyNotes}
          </Wrapper>;
     }
     // dragulaDecorator = (componentBackingInstance) => {
     //      if (componentBackingInstance) {
     //           let options = {};
     //           Dragula([componentBackingInstance], options);
     //      }
     // };   
};
const mapStateToProps = state => {
     return {
         stickyArray: state.stickyNote
     }
 }
export default connect(mapStateToProps)(Sticker);
// 黏到store
 
// const StickyNoteStyle = styled.div`
//      /* padding: 6px; */
//      margin: 3px auto;
//      width: 97%;
//      resize: none;
//      overflow: hidden;
//      min-height: 30px;
//      /* box-sizing:border-box; */
//      font-size: 30px;
// `;
const Wrapper= styled.div`
     display:flex;
     flex-direction:column;
     align-items: center;

`;

// .gu-mirror {
//      position: fixed !important;
//      margin: 0 !important;
//      z-index: 9999 !important;
//      opacity: 0.8;
//      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";
//      filter: alpha(opacity=80);
//    }
//    .gu-hide {
//      display: none !important;
//    }
//    .gu-unselectable {
//      -webkit-user-select: none !important;
//      -moz-user-select: none !important;
//      -ms-user-select: none !important;
//      user-select: none !important;
//    }
//    .gu-transit {
//      opacity: 0.2;
//      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=20)";
//      filter: alpha(opacity=20);
//    }