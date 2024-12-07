import { useState, useEffect } from 'react'
import { apiUrl } from '@/lib/Constants'
import CardGrid from '@/components/CardGrid'
import { Link } from 'react-router-dom'
import ControlBar from '@/components/Searchbar'

interface MediaContent {
	title: string
	poster_url: string
	year: string
	id: string
	media_type: string
}

const Card: React.FC<{ item: MediaContent }> = ({ item }) => {
	var posterUrl = ''
	if (item.poster_url == 'None') {
		posterUrl = 'https://placehold.co/600x900?text=:('
	} else {
		posterUrl = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${item.poster_url}`
	}
	return (
		<Link to={`/${item.media_type}/${item.id}`} className="flex items-center" key={item.id}>
			<div className="flex flex-col items-left">
				<div
					className="p-4 h-72 w-40 sm:w-1/2 md:h-80 md:w-48 border rounded-lg shadow-md flex items-center justify-center"
					style={{
						backgroundImage: `url('${posterUrl}')`,
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

export default function Search() {
	const [selectedCategory, setSelectedCategory] = useState<string>('movie')
	const [searchQuery, setSearchQuery] = useState<string>('')
	const [mediaContent, setMediaContent] = useState<MediaContent[]>([])

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			if (searchQuery.trim()) {
				fetch(`${apiUrl}media/${selectedCategory}/search?q=${searchQuery}`)
					.then((response) => response.json())
					.then((data) => {
						setMediaContent(data['results'])
					})
					.catch((error) => {
						console.error('Error fetching search results:', error)
					})
			} else {
				setMediaContent([])
			}
		}, 300)

		return () => clearTimeout(delayDebounceFn)
	}, [searchQuery, selectedCategory])

	return (
		<div className="flex flex-col justify-center w-full pl-2 pr-2 m-0 p-0 mb-5">
			<ControlBar
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
			/>

			<div className="flex justify-center mt-10 ml-4 md:ml-12">
				<CardGrid>
					{Array.isArray(mediaContent) && mediaContent.length > 0 ? (
						mediaContent.map((item) => <Card key={item.id} item={item} />)
					) : (
						<></>
					)}
				</CardGrid>
			</div>
		</div>
	)
}
