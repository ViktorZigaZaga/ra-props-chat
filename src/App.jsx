import React from 'react'
import './App.css'
import MessageHistory from './components/MessageHistory'
import messages from './data/ChatMessages'

function App() {

  return (
    <div className="clearfix container">
      <div className="chat">
        <div className="chat-history">
          <MessageHistory list={messages} />
        </div>
      </div>  
    </div>
  );
}

export default App
