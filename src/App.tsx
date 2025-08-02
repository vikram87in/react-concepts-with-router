import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import UseStateDemo from './concepts/useStateDemo';

function Home() {
  return (
    <div>
      <h1>React Concepts Learning Workspace</h1>
      <ul>
        <li>
          <Link to="/concepts/useStateDemo">useState Demo</Link>
        </li>
        {/* Add more concepts here as you create them */}
      </ul>
      <p>
        Add new concepts in <code>src/concepts/</code> and register their routes here.
      </p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/concepts/useStateDemo" element={<UseStateDemo />} />
        {/* Add more concept routes here */}
      </Routes>
    </Router>
  );
}

export default App;
