import { ChatEngine } from "react-chat-engine";
import "./App.css";

import ChatFeed from "./component/ChatFeed";

function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID={process.env.REACT_APP_PROJECTID}
      userName={process.env.REACT_APP_USERNAME}
      userSecret={process.env.REACT_APP_KEY}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
