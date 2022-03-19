import "./styles.css";

const spotify_client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
console.log(spotify_client_id);

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
