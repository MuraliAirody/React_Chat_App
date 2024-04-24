import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";

function App() {
  const currentUser = true
  return (
    <>
      <div className="container">
        {currentUser ? (
          <>
            <List />
            <Chat />
            <Detail />
          </>
        ) : (
          <Login />
        )}
        <Notification/>
      </div>
    </>
  );
}

export default App;
