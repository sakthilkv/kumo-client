import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Dashboard from '@/pages/Dashboard'
import Search from '@/pages/Search'
import MovieSpotlight from './pages/MovieSpotlight'
import SeriesSpotlight from './pages/SeriesSpotlight'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/search" element={<Search />} />
				<Route path="/movie/*" element={<MovieSpotlight />} />
				<Route path="/tvseries/*" element={<SeriesSpotlight />} />
			</Routes>
		</>
	)
}

export default App
