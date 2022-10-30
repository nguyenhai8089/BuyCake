import React, {Component} from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import Counter from "./components/counter";
import{BrowserRouter} from 'react-router-dom';
import{Provider} from 'react-redux';
import{ConfigureStore}from './redux/store';

const store=ConfigureStore();


class App extends Component { 
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
            <div className="App">        
              <Counter/>      
            </div>       
        </BrowserRouter>
      </Provider>     
      
    );

  }
  
}

export default App;
