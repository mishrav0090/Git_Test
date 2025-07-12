    import React from 'react';
    import Chatbot from 'react-chatbot-kit';
    import 'react-chatbot-kit/build/main.css';

    import config from './chatbotConfig'; // Create this file
    import MessageParser from './MessageParser'; // Create this file
    import ActionProvider from './ActionProvider'; // Create this file

    function App() {
      return (
        <div className="App">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      );
    }

    export default App;