import React, {Component} from 'react';
import './App.css';
// import MyComponent from './practice/20220705/MyComponent'; // MyComponenet 파일을 불러옴
// import EventPractice from './practice/EventPractice'
// import EventPractice2 from './practice/EventPractice2'
// import EventPractice4 from './practice/20220705/EventPractice4'
// import ValidationSample from './ValidationSample'
// import ScrollBox from './practice/20220705/ScrollBox';
// import IterationSample from './practice/20220705/IterationSample';
import LifeCycleSample from './practice/20220705/LifeCycleSample';




//랜덤색상을 생성합니다.
function getRandomColor(){
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }//getRandomColor



  

// 클래스형 컴포넌트
class App extends Component{
  
  state = {
    color: '#000000'
  };
  
  
  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  };//handleClick


  render(){
    // const text = '당신은 어썸한가요?';
    // const condition = true;
    // const style = {
    //   backgroundColor: 'gray',
    //   border: '1px solid black',
    //   height: Math.round(Math.random() * 300) + 50,
    //   width: Math.round(Math.random() * 300) + 50,
    //   WebkitTransition: 'all',
    //   MozTransition: 'all',
    //   msTransition: 'all'
    // };

    return(
      //<Fragment></Fragment>는 <div>말고 여러가지 요소를 랜더링하고싶을때 사용가능
      <div className="my-div">
        {/* <h1>리액트 안녕</h1>
        <h1>{text}</h1> */}
        

        {/* 조건부(3항)연산자와 &&을 이용한 조건부 렌더링 */}
        {/* {condition ? '참이면 보여짐' : null}
        <p></p>
        {condition && '참이면 보여짐'}
        <p></p>
        
        <div style = {style}></div>
        
        <p>위에는 style을 자바스크립트 객체 형식으로 만들어 적용한 예제</p> */}

        {/* 컴포넌트에 name 값을 지정해주지않으면 defaultProps에 기본값으로 지정된 데이터로 나옴 */}
        {/* <MyComponent name = 'React' age = {32}></MyComponent>  */}

        {/* <EventPractice4></EventPractice4>
        <p></p>

        <ValidationSample></ValidationSample>
        <p></p>

        <ScrollBox ref={(ref) => this.ScrollBox = ref}></ScrollBox>
        <button
          onClick={() => this.ScrollBox.scrollToBottom()}>
            맨 밑으로
        </button>
        <p></p>

        <IterationSample></IterationSample>
        <p></p> */}

        <button
          onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color}></LifeCycleSample>


      </div>
      
    )//return
    
  }//render

}// class App


// 클래스형 컴포넌트
// class App extends Component{
  
//   render(){
//     return(
//       // <div>
//       <Fragment>
//         <h1>리액트 안녕</h1>
//         <h1>당신은 어썸한가요?</h1>
//       </Fragment>
//       // </div>
//     )
//   }
// }// class App


// 함수형 컴포넌트1
// function Hello(props){
//   return(
//     <div>
//       Hello{props.name}
//     </div>
//   )//return

// }//function component

// 함수형 컴포넌트2
// const App = (props) => {
//   const [a, b, c] = props
//   const aaa = () => {
// //  call api
//   };
//   useEffect(()=>{
//     aaa();
//   }, [a,b]);

//   return (
//     <div className="App">
//       <h1>리액트 안녕</h1>
//       <h1>당신은 어썸한가요?</h1>

//     </div>
//   );
// }

export default App;
