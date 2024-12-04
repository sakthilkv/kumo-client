import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle.tsx'
import Header from './components/header'
function App() {
	return (
		<div>
			<Header></Header>
			<Button>Click me</Button>

		</div>
	)
}

export default App
