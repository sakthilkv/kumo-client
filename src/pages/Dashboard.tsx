import { useEffect, useState } from 'react'
import ControlBar from '@/components/ControlBar'
import CardGrid from '@/components/CardGrid'
import { Link } from 'react-router-dom'
interface MediaContent {
	id: string
	media_type: string
	plot: string
	poster_url: string
	title: string
	year: string
}

const Card: React.FC<{ item: MediaContent }> = ({ item }) => {
	return (
		<Link to={`/${item.media_type}/${item.id}`} className="flex items-center" key={item.id}>
			<div className="flex flex-col items-left">
				<div
					className="p-4 h-72 w-40 sm:w-1/2 md:h-80 md:w-48 border rounded-lg shadow-md flex items-center justify-center"
					style={{
						backgroundImage: `url('https://image.tmdb.org/t/p/w600_and_h900_bestv2${item.poster_url}')`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
					}}
				></div>
				<p className="mt-3 font-semibold text-left line-clamp-2 ml-1">{item.title}</p>
				<p className="font-semibold text-left text-sm text-gray-500 line-clamp-2 ml-1">
					{item.year}
				</p>
			</div>
		</Link>
	)
}

export default function Dashboard() {
	const [selectedCategory, setSelectedCategory] = useState<string>('movie')
	const [searchQuery, setSearchQuery] = useState<string>('')
	const [selectedStatus, setSelectedStatus] = useState<string>('all')
	const [mediaContent, setMediaContent] = useState<MediaContent[]>([])

	useEffect(() => {
		const movieIds = [
			'tt29623480',
			'tt0111161',
			'tt0068646',
			'tt0468569',
			'tt0071562',
			'tt0050083',
			'tt0108052',
			'tt0816692',
			'tt5311514',
			'tt0167260',
			'tt0137523',
			'tt0133093',
			'tt0080684',
			'tt0099685',
			'tt0076759',
			'tt9426210',
			'tt0086190',
			'tt0109830',
			'tt0134074',
			'tt0253474',
			'tt0211915',
			'tt0102926',
			'tt0110912',
			'tt0266543',
			'tt0372784',
			'tt0038650',
			'tt0114369',
			'tt0325980',
			'tt0482571',
			'tt0317248',
			'tt0120737',
		]

		const fetchData = async () => {
			const data = await Promise.all(
				movieIds.map(async (id) => {
					const response = await fetch(`http://192.168.0.104:5000/api/media/min/movie/${id}`)
					const json = await response.json()
					return json
				}),
			)
			setMediaContent(data)
		}

		fetchData()
	}, [])

	return (
		<div className="flex flex-col justify-center w-full pl-2 pr-2 m-0 p-0 mb-5">
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
			<div className="flex justify-center mt-10 ml-4 md:ml-12">
				<CardGrid>
					{mediaContent.map((item) => (
						<Card key={item.id} item={item} />
					))}
				</CardGrid>
			</div>
		</div>
	)
}
