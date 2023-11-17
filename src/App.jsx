import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1 className="text-5xl text-blue-400 font-mono">React App</h1>
        <form>
          <input type="text" placeholder="Enter your name" />
          <span>Time: {new Date().toLocaleTimeString()}</span>
        </form>
      </div>
    </>
  );
}

export default App;
