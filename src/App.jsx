import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import WcSet from './pages/WC'
import RuangKeluargaSet from './pages/RuangKeluargaSet'
import DapurSet from './pages/DapurSet'
import DataUser from './pages/DataUser'
import KelasSet from './pages/KelasSet'
import LingkunganSekolah from './pages/LingkunganSekolah'
import Beranda from './pages/Beranda'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kamar-mandi" element={<WcSet />} />
        <Route path="/ruang-keluarga" element={<RuangKeluargaSet />} />
        <Route path="/dapur" element={<DapurSet />} />
        <Route path="/ruang-kelas" element={<KelasSet />} />
        <Route path="/lingkungan-sekolah" element={<LingkunganSekolah />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/data-user" element={<DataUser />} />
      </Routes>
    </Router>
  )
}

export default App
