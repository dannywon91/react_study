import React, {Component} from 'react';

class MyComponent extends Component{
    state = {
        name: '',
        message: ''
    }//state

    handleChange = (e) =>{
        console.log('e', e);
        this.setState({
            [e.target.name]: e.target.value
        });
    }//handleChange

    handleClick = () => {
        alert("입력 되었습니다.")
        this.setState({
            name: '',
            message: ''
        });
    }//handleClick

    render(){
        return(
            <div>
                <h1 className='h1'>Hi, My name is {this.state.name}, {this.state.message}</h1>
                <input
                    type="text"
                    name="name"
                    placeholder='이름 입력'
                    value={this.state.name}
                    onChange={this.handleChange}>
                </input>

                <input
                    type="text"
                    name="message"
                    placeholder='할말 입력'
                    value={this.state.message}
                    onChange={this.handleChange}>
                </input>

                <button
                    onClick={this.handleClick}>입력</button>
            </div>
        )//return
    }//render
}//class

export default MyComponent