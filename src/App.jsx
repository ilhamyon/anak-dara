import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import WcSet from './pages/WC'
import RuangKeluargaSet from './pages/RuangKeluargaSet'
import DapurSet from './pages/DapurSet'
import DataUser from './pages/DataUser'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kamar-mandi" element={<WcSet />} />
        <Route path="/ruang-keluarga" element={<RuangKeluargaSet />} />
        <Route path="/dapur" element={<DapurSet />} />
        <Route path="/data-user" element={<DataUser />} />
      </Routes>
    </Router>
  )
}

export default App
