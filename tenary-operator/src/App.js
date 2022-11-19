import "./App.css";
import { UserProvider, useUser } from "./UserContext";

const LoggedInUser = () => {
  const {user} = useUser();
  return (
    <p>
      Hello <span className="Username">{user.name}</span>
    </p>
  );
};
const Header = () => {
  return (
    <header>
      <h2>Blog App</h2>
      <LoggedInUser />
    </header>
  );
};
const Page = () => {
  const {user} = useUser();
  return (
    <div>
      <h2>What is Lorrem Ipsum?</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of
        type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the
        1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with
        desktop publishing software like Aldus PageMaker
        including versions of Lorem Ipsum.
      </p>
      <p>Written by: {user.name}</p>
    </div>
  );
}
  function App() {
    return (
      <div className="App">
        <Header />
        <Page />
      </div>
    )
  }
  function Root(){
    return (
    <UserProvider>
      <App />
    </UserProvider>
  )
}

export default Root;