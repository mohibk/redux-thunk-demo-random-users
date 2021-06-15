import { useEffect } from "react";
import store from "./store/store";
import { initiateGetUsers } from "./actions/users";
import Header from "./components/Header";
import UserList from "./components/UserList";

const App = () => {
  useEffect(() => {
    store.dispatch(initiateGetUsers());
  }, []);
  return (
    <div className="main-section">
      <Header />
      <UserList />
    </div>
  );
};

export default App;
