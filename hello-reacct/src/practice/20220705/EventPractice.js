import React, {Component}from 'react';


class EventPractice extends Component {
    state = { 
        message: ''
    }
    
    render() {
        return(
            <div>
                <h1>
                    이벤트 연습
                </h1>

                {/* state에 input값 담기 */}
                <input 
                    type="text"
                    name="message"
                    placeholder="입력하세요"
                    value={this.state.message}
                    onChange={(e) => {
                        console.log('   eeee', e);

                        this.setState({
                            message: e.target.value
                            
                        })
                    } // event
                    }></input>
                    
                    <button onClick={()=>{
                        alert(this.state.message);
                        this.setState({
                            message: ''
                        })
                    }}>확인</button>

            </div>
        )//return
        
    }//render

}//class

export default EventPractice;