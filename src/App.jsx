import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import WC from './pages/WC'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kamar-mandi" element={<WC />} />
      </Routes>
    </Router>
  )
}

export default App
