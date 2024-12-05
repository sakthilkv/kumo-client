import { useState } from 'react'
import ControlBar from '@/components/ControlBar'
import CardGrid from '@/components/CardGrid'

export default function Dashboard() {
	const [selectedCategory, setSelectedCategory] = useState<string>('movie')
	const [searchQuery, setSearchQuery] = useState<string>('')
	const [selectedStatus, setSelectedStatus] = useState<string>('all')
	const cards = Array.from({ length: 12 }, (_, i) => (
		<div
			key={i}
			className="p-4 h-80 w-44 sm:w-1/2 md:w-52 border rounded-lg shadow-md flex items-center justify-center"
			style={{
				backgroundImage: `url('https://image.tmdb.org/t/p/w600_and_h900_bestv2/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg')`,
				backgroundSize: 'cover', 
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<div className="bg-black bg-opacity-50 p-2 text-white">{`Card ${i + 1}`}</div>
		</div>
	))

	return (
		<>
			<div className="flex flex-col justify-center w-full pl-2 pr-2">
				<ControlBar
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
					searchQuery={searchQuery}
					setSearchQuery={setSearchQuery}
					selectedStatus={selectedStatus}
					setSelectedStatus={setSelectedStatus}
				/>
				{/* <div className="mt-5 text-center">
				<h1 className="text-xl font-bold">Category: {selectedCategory}</h1>
				<h1 className="text-xl font-bold">Search Query: {searchQuery}</h1>
				<h1 className="text-xl font-bold">Status: {selectedStatus}</h1>
			</div> */}
				<div className="ml-4 flex justify-center mt-10">
					<CardGrid>{cards}</CardGrid>
				</div>
			</div>
		</>
	)
}
