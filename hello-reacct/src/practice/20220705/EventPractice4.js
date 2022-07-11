import React, {Component} from "react";

class EventPractice4 extends Component{
    state = {
        userName: '',
        message: ''
    }
    //이벤트를 메소드로 정의함
    handleChange = (e) => {
        console.log('   e =', e);
        this.setState({
            [e.target.name]: e.target.value
        });
    }//handleChange

    handleClick = () => {
        alert(this.state.userName + ' says ' + this.state.message)
        this.setState({
            userName: '',
            message: ''
        });
    }//handleClick

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }//handleKeyPress

    //정의한 메소드는 render메소드 안에서 사용가능
    render(){
        return(
            <div className="abc">
                <input
                    type="text"
                    name="userName"
                    placeholder="이름입력"
                    value={this.state.userName}
                    onChange={this.handleChange}>
                </input>

                <input
                    type="text"
                    name="message"
                    placeholder="내용을 입력하세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}>
                </input>

                <button onClick={this.handleClick}>
                    확인
                </button>
            </div>
        )//return

    }//render

}//class


export default EventPractice4;