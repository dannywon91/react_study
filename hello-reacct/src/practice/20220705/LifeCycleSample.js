import React, {Component} from 'react';


class LifeCycleSample extends Component{

    state = { 
        number: 0,
        color: null
    };

    myRef = null; //ref를 설정할 부분

    constructor(props){
        super(props);
        console.log('   constructor: ', constructor);

    }//constructor

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.color !== prevState.color){
            return {color: nextProps.color};
        }//if

        return null;
    }//getDerivedStateFromProps

    componentDidMount() {
        console.log('   componentDidMount',)
    }//componentDidMount

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        //숫자의 마지막 자리가 4면 리렌더링하지 않습니다.

        return nextState.number % 10 !== 4;
    }//shouldComponentUpdate
    
    componentWillUnmount(){
        console.log('componentWillunmount');
    }//componentWillUnmount

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        });

    }//handleClick
    
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate');
        
        if(prevProps.color !== this.props.color){
            return this.myRef.style.color;
        }//if

        return null;

    }//getSnapshotBeforeUpdate

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate', prevProps, prevState);
        
        if(snapshot){
            console.log('업데이트 되기 전 색상: ', snapshot);

        }//if
    }//componentDidUpdate

    render(){
        console.log('   render');
        const style = {
            color: this.props.color
        };

        return(
            <div>
                <h1 
                    style={style} 
                    ref={ref => this.myRef = ref}>
                        {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button
                    onClick={this.handleClick}>더하기</button>
            </div>
        )//return
        
    }//render()

}//class

export default LifeCycleSample;