import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { identify } from 'lodash/fp';

// import Dragula from 'react-dragula';
import styled from 'styled-components';
import { connect } from 'react-redux';

class Sticker extends Component {
  propTypes = {
    dispatch: PropTypes.func,
    stickyArray: PropTypes.arrayOf(PropTypes.string),
  }

  defaultProps = {
    dispatch: identify,
    stickyArray: [],
  }

  onChange = (e) => {
    this.props.dispatch({
      type: 'editStickyNote',
      data: e.target.value,
      key: e.target.key,
    });
  }
  render() {
    const { onChange } = this;
    const { stickyArray } = this.props;

    const stickyNote = stickyArray.map((elem, index) => (
      <StickyNote key={index} onChange={onChange} /> // eslint-disable-line
    ));
    //   console.log(stickyNote);
    return (
      <Wrapper className="container">
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
      </Wrapper>);
  }

// dragulaDecorator = (componentBackingInstance) => {
//      if (componentBackingInstance) {
//           let options = {};
//           Dragula([componentBackingInstance], options);
//      }
// };
}

const mapStateToProps = state => ({
  stickyArray: state.stickyNote,
});

export default connect(mapStateToProps)(Sticker);
// 黏到store

const StickyNote = styled.input`
display:flex;
padding:6px;
margin:3px auto;
width:97%;
height:50px;
box-sizing:border-box;
`;
const Wrapper = styled.div`
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
