import React, {Component} from 'react';
import './ValidationSample.css'

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    }//state

    handleChange = (e) =>{
        console.log('   e', e.target.value)
        this.setState({
            password: e.target.value
        });

    }//handleChange

    handleButtonClick = () =>{
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });
        this.input.focus();

    }//handleButtonClick

    handleKeyPress = (e) =>{
        if(e.key === 'Enter'){
            this.handleButtonClick();
        }
    }
    render(){
        return(
            <div>
                <p>ref를 이용해서 input에 포커스를 둔다</p>
                <input
                    ref={(ref) => {
                        this.input = ref;
                    }}
                    type="password"
                    value={this.state.password}
                    placeholder="비번입력"
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}>
                </input>

                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        )//retunr

    }//render

}//class

export default ValidationSample