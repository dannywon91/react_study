import React, {useState, Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
// import loadable from '@loadble/component';

//React.lazy를 사용해서 코드스플리팅
const SplitMe = React.lazy(() => import('./splitMe'));



//loadable을 사용해서 코드스플리팅
// const SplitMe = loadable(() => import('./splitMe'));


function App() {
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    setVisible(true);

  }; //onClick


  // const onClick = () => {
  //   import('./notify').then(result=>result.default());
  // } //onClick()
  



  return (
    <div className="App">
      <header className='App-header'>
        <img src={logo} className="App-logo" alt='logo' />
        <button onClick={onClick}> Click Here !</button>
        <Suspense fallback={<div>로딩중...</div>}>  {/* fallback은 로딩이 끝나지 않았을때 보여줄 UI 지정 */}
          {visible && <SplitMe />}
        </Suspense>
      </header>
    </div>
  );
}

export default App;
