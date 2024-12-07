import { useEffect, useState } from 'react'
import ControlBar from '@/components/ControlBar'
import CardGrid from '@/components/CardGrid'
import { Link } from 'react-router-dom'
import { apiUrl, UserID } from '@/lib/Constants'
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
		const fetchDashboard = async () => {
			try {
				const response = await fetch(`${apiUrl}user/dashboard?media_type=${selectedCategory}`, {
					headers: {
						uid: UserID,
					},
				})
				if (!response.ok) {
					throw new Error('Failed to fetch media IDs')
				}

				const userData = await response.json()
				const mediaData = await Promise.all(
					userData['results'].map(async (record: { media_id: any; status: any; progress: any }) => {
						const mediaResponse = await fetch(
							`${apiUrl}media/min/${selectedCategory}/${record['media_id']}`,
						)
						if (!mediaResponse.ok) {
							throw new Error('Failed to fetch media IDs')
						}
						const mediaJson = await mediaResponse.json()

						return {
							id: mediaJson.id,
							media_type: mediaJson.media_type,
							plot: mediaJson.plot,
							poster_url: mediaJson.poster_url,
							title: mediaJson.title,
							year: mediaJson.year,
							status: record.status,
							progress: record.progress,
						}
					}),
				)

				setMediaContent(mediaData)
			} catch (error) {
				console.error('Error fetching media data:', error)
			}
		}

		fetchDashboard()
	}, [selectedCategory])

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
