import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './Counter'
import MiniBank from './MiniBank.jsx'
import FetchPostData from './FetchPostData.jsx'
import IBMTask from './IBMTask.jsx'
import TakeInputFromUser from './TakeInputFromUser.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* <Counter /> */}
      ===========================
      <h1>Mini Bank</h1>
     <MiniBank />
     ==========API call===============
     <FetchPostData />
     <IBMTask />
     <TakeInputFromUser />
    </>
  )
}

export default App
