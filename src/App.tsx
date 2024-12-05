import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Dashboard from '@/pages/Dashboard'
import Search from '@/pages/Search'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/search" element={<Search />} />
			</Routes>
		</>
	)
}

export default App
