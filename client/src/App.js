import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <ShoppingList />
      </div>
    );
  }
}

export default App;

// What was there upon install instead of class App extends^
// function App() {
//   return (
//     <div className="App">
//       <AppNavbar />
//     </div>
//   );
// }

// export default App;
