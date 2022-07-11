import React, {Component} from 'react';
import PropTypes from 'prop-types';

// const MyComponent = (props) => {
//     console.clear();
//     console.log('props= ', props);
//     return(
//         <div>
//             <h1>제 이름은 {props.name} 입니다.</h1>
//             <h1>저는 {props.age}살 입니다.</h1>
//         </div>

//     )
        
// }
// function MyComponent(props){
//     console.clear();
//     console.log('props= ', props);

//     return(
//             <div>
//                 <h1>제 이름은 {props.name} 입니다.</h1>
//                 <h1>저는 {props.age}살 입니다.</h1>
//             </div>
//     );
// }

class MyComponent extends Component{

    // 클래스 내부에서 static defaultProps를 이용하여 defaultProps를 지정가능
    // static defaultProps = {
    //     name : '기본 이름'
    // }
    constructor(props){
        super(props);
        this.state = {
            number: 0
        }
    }


    render(){
        return(
            <div>
                <p id = "name">안녕하세요, 제 이름은 {this.props.name} 입니다.</p>
                <p id = "age">저는 {this.props.age}살 입니다.</p> 
                <p>숫자를 출력합니다! {this.state.number}</p>
                <button onClick={() =>
                    this.setState({
                    number: this.state.number + 1 
                    })
                }>더하기</button>

                <button onClick={() =>
                    this.setState({number: this.state.number -1})
                    }>빼기</button>

                {/* arrow function연습 */}
                

            </div>
        )
    }
}
// 클래스 외부에서 MyComponent에 접근하여 defaultProps 지정가능
MyComponent.defaultProps = {
    name: '기본이름'
}

MyComponent.propTypes = {
    name: PropTypes.string, // name props 타입을 문자열로 설정
    age: PropTypes.number.isRequired  // 필수적으로 존재해야 하며, 숫자입니다.
}


export default MyComponent;