import { Routes, Route } from 'react-router-dom'
import './App.css'
import Buttons from './components/Buttons'
import Header from './components/Header'
import Home from './components/Home'
import Block6in1 from './pages/Block6in1'
import BlueBlock from './pages/BlueBlock'
import CutA4 from './pages/CutA4'
import CutF1 from './pages/CutF1'
function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blueBlock" element={<BlueBlock />} />
        <Route path="/block6in1" element={<Block6in1 />} />
        <Route path="/cutF1" element={<CutF1 />} />
        <Route path="/cutA4" element={<CutA4 />} />
      </Routes>
      <Buttons />
    </div>
  )
}

export default App
