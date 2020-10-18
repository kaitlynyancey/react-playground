import React, {Component} from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter';

// const firstTooltip = (
//   <Tooltip color='hotpink' message='tooltip message'>
//     ipsum
//   </Tooltip>
// )
// const secondTooltip = (
//   <Tooltip color='#126BCC' message='another tooltip message'>
//     officiis
//   </Tooltip>
// )

class App extends Component {
  render() {
    return(
      <div className="App">
        <h1>My Application!</h1>
        <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/>
        <TheDate />
        <Counter count={123} step={3}/>
      </div>
    )
  }
}

export default App;
