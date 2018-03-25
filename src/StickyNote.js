import React ,{ Component }from 'react';
import {connect} from 'react-redux';
import autosize from 'autosize';

class StickyNote extends Component {
    componentDidMount() {
        // console.log(this)
        // console.log(this.textarea);
        this.textarea.focus();
        autosize(this.textarea);
    } 
    render() {
        const style = {
            width: '85%',
            margin: '10px auto',
            borderRadius: '2px',
            border: '0',            
            resize: 'none',
            overflow: 'hidden',
            minHeight: '100px',
            fontSize: '30px',
            background: 'rgba(255,255,255,0.9)',
            // boxShadow: '0px 10px 15px rgba(0,0,0,0.2)',
            boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.01)',
        };
        
        return (
            <textarea
                style={style}
                ref={c => (this.textarea = c)}
                rows={1}
                value={this.props.value}
                id={this.props.id}
                paper={this.props.paper}
                onChange={(e)=>{
                    this.props.dispatch({ 
                        type:'editStickyNote', 
                        data: e.target.value,
                        key: e.target.id,
                        paper: e.target.getAttribute('paper')
                    });
                }}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        stickyArray: state.stickyNote
    }
}

export default connect(mapStateToProps)(StickyNote);
