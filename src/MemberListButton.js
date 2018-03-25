import React ,{ Component }from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

class MemberListButton extends Component {
    render() {
        let ButtonList = this.props.userList.map((member,index)=>{
            if(member === "666"){
                return <Button primary key={index}></Button>
            }
            return <Button key={index}></Button>
        })
        return (
            <MemberButtonWrapper>
                {ButtonList}
                 {/* <Button primary></Button>
                 <Button></Button>
                 <Button></Button> */}
            </MemberButtonWrapper>
        )
    }
}

const MemberButtonWrapper = styled.div`
    display:flex;
    align-items:center;
    position:fixed;
    left:10px;
    bottom:15px;
`

const Button = styled.button`
    width: ${props => props.primary ? '40px' : '30px'};
    height:  ${props => props.primary ? '40px' : '30px'};
    margin: 0 3px;
    border: 0px solid #000;;
    border-radius: 100%;
    background:  ${props => props.primary ? 'palevioletred' : '#ededed'};
    opacity: .92;
`

const mapStateToProps = state => {
    return {
        userList: state.room.userList
    }
}
export default connect(mapStateToProps)(MemberListButton);
