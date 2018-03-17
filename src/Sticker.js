import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

class Sticker extends Component {     
    render() {
        let stickyNote = this.props.stickyArray.map((elem,index)=>{
            return  <StickyNote
                        id={index}
                        key={index} 
                        value={elem}
                        onChange={(e)=>{
                                this.props.dispatch({ 
                                    type:'editStickyNote', 
                                    data: e.target.value,
                                    key: e.target.id 
                                });
                        }}></StickyNote> ;
          });
          return <Wrapper className='container' //ref={this.dragulaDecorator}
          >
               {stickyNote}

               {/* onClick={this.props.children.addCard()} */}
               {/* <StickyNote>
                    <div>Swap me around</div>
               </StickyNote>
               <StickyNote>
                    <div>Swap her around</div>
               </StickyNote>
               <StickyNote>
                    Swap him around
               </StickyNote>
               <StickyNote>
                    Swap them around
               </StickyNote>
               <StickyNote>
                    Swap us around
               </StickyNote>
               <StickyNote>
                    Swap things around
               </StickyNote>
               <StickyNote>   
                    Swap everything around
               </StickyNote> */}
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

const StickyNote= styled.input`
     display:flex;
     padding:6px;
     margin:3px auto;
     width:97%;
     height:50px;
     box-sizing:border-box;
`;
const Wrapper= styled.div`
     display:flex;
     flex-direction:column;

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