import './App.css';
import MyComponent from './MyComponent';
import printLater from './printLater';

printLater = (number, fn) => {
  setTimeout(
    function() {
      console.log(number);

      if(fn) {
        fn();
      }//if
      
    }, 1000
    
  );
  printLater(1, function() {
    printLater(2, function() {
      printLater(3, function(){
        printLater(4);
      })
    })
  });

};//printLater



function App() {
  return (
    <div className="App">
      {/* <MyComponent></MyComponent> */}
      <printLater />
    </div>
  );
}

export default App;
