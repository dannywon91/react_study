import React, {Component} from 'react';


class EventPractice2 extends Component {
    state = {
        message: ''
    }
    
    //메서드 바인딩은 생성자 메소드에서 하는것이 정석
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }//constructor

    
    
    //일반적인 메소드 작성법
    // handleChange(e){
    //     this.setState({
    //         message: e.target.value
    //     });
    // }//handleChange

    // //일반적인 메소드 작성법
    // handleClick(e){
    //     alert(this.state.message);
    //     this.setState({
    //         message: ''
    //     });
    // }//handleClick

    //Property Initializer Syntax를 사용한 메소드 작성에서
    //tranform-class-properties 문법을 이용하여 화살표함수 형태로 메서드를 정의

    handleChange = (e) => {
        this.setState({
            message: e.target.value
        })
    }//handleChange

    handleClick = () => {
        alert(this.state.message);
        this.setState({
            message: ''
        });
    }//handleClick

    render() {
        return(
            <div>
                <h1>이벤트연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="입력하세요"
                    value={this.state.message}
                    onChange={this.handleChange}>

                </input>

                <button onClick={this.handleClick}>
                    확인
                </button>

            </div>
        )//return

    }//render
    
}//class

export default EventPractice2