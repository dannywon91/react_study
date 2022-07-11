import React, { Component } from 'react'

class IterationSample extends Component {
    state = {
        names: ['눈사람', '얼음', '눈', '바람'],
        name: ''
    };

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });

    }//handleChange

    handleInsert = () => {
        //names 배열에 값을 추가하고, name값을 초기화 한다.
        this.setState({
            names: this.state.names.concat(this.state.name),
            name: ''

        });
    }//handleInsert

    handleRemove = (index) => {
        //편의상 name의 레퍼런스를 미리 만든다
        const { names } = this.state;

        //배열을 자르는 내장함수 slice와 전개연산자 (...)을 사용하여 index 번째 값을
        // 제외한 값들을 배열에 넣어줌
        this.setState({
            names: [
                ...names.slice(0, index),
                ...names.slice(index + 1, names.length)
            ]
        });
    }


    render() {
        const nameList = this.state.names.map(
            (name, index) => (
                <li 
                    key={index}
                    onDoubleClick={() => this.handleRemove(index)}>
                    {name}
                </li>
            ));

        return (
            <div>
                <input
                    onChange={this.handleChange}
                    value={this.state.name}>
                </input>

                <button
                    onClick={this.handleInsert}>
                    추가
                </button>
                <ul>
                    {nameList}
                </ul>
            </div>
        )
    }
}

export default IterationSample;
