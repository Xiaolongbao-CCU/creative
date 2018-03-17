import React ,{ Component }from 'react';
import autosize from 'autosize';

class StickyNote extends Component {
    componentDidMount() {
        this.textarea.focus();
        autosize(this.textarea);
    } 
    render() {
        const style = {
            width: '97%',
            margin: '10px auto',
            borderRadius: '8px',
            border: '0',            
            resize: 'none',
            overflow: 'hidden',
            minHeight: '40px',
            fontSize: '30px',
            background: 'rgba(255,255,255,0.9)'
        };
        return (
                <textarea
                    style={style}
                    ref={c => (this.textarea = c)}
                    rows={1}
                    defaultValue=""
                />
        )
    }
}


export default StickyNote;
