import React, {Component} from 'react';



class EventPractice3 extends Component {
    state = {
        userName: '',
        message: ''

    }//state

    handleChange = (e) => {
        console.log('   e =', e);
        this.setState({
            // userName : e.target.value,
            // message : e.target.value
            [e.target.name]: e.target.value
        });
    }//handleChange

    handleClick = () => {
        alert(this.state.userName + ': ' + this.state.message);
        this.setState({
            userName: '',
            message: ''
        });
    }//handleClick

    render(){
        return(
            <div>
                <h1>EventPractice3</h1>
                <input 
                    type="text"
                    name="userName"
                    placeholder="유저명"
                    value={this.state.userName}
                    onChange={this.handleChange}>
                    
                </input>

                <input 
                    type="text"
                    name="message"
                    placeholder="메세지"
                    value={this.state.message}
                    onChange={this.handleChange}>
                    
                </input>

                <button onClick={this.handleClick}>확인</button>
            </div>
        )//return

    }//render
    
}//class

export default EventPractice3