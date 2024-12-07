import { useEffect } from 'react'
import { Select, SelectTrigger, SelectValue } from '@/components/ui/select'
import SelectContentComponent from '@/components/SelectContentComponent'
import { Input } from '@/components/ui/input'
import { apiUrl } from '@/lib/Constants'

interface ControlBarProps {
	selectedCategory: string
	setSelectedCategory: (value: string) => void
	searchQuery: string
	setSearchQuery: (value: string) => void
}

const ControlBar: React.FC<ControlBarProps> = ({
	selectedCategory,
	setSelectedCategory,
	searchQuery,
	setSearchQuery,
}) => {
	const categoryColors: { [key: string]: string } = {
		movie: 'dark:text-blue-400',
		tvseries: 'dark:text-teal-400',
		anime: 'dark:text-red-400',
		manga: 'dark:text-purple-400',
		books: 'dark:text-green-400',
		games: 'dark:text-yellow-400',
		lightnovel: 'dark:text-orange-400',
	}

	const categoryColor = categoryColors[selectedCategory] || ''

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			if (searchQuery.trim()) {
				fetch(`${apiUrl}search?q=${searchQuery}&type=${selectedCategory}`)
					.then((response) => response.json())
					.then((data) => {
						console.log('Search Results:', data)
					})
					.catch((error) => {
						console.error('Error fetching search results:', error)
					})
			}
		}, 300) // Add a debounce delay of 300ms

		return () => clearTimeout(delayDebounceFn)
	}, [searchQuery, selectedCategory])

	return (
		<div className="control-bar sticky top-[75px] md:top-[78px]  dark:bg-black bg-white flex flex-row pt-3 pb-3  w-full justify-center gap-2 border-b ">
			<Select defaultValue={selectedCategory} onValueChange={setSelectedCategory}>
				<SelectTrigger className={`w-[130px] font-medium px-2 text-sm ${categoryColor}`}>
					<SelectValue />
				</SelectTrigger>
				<SelectContentComponent />
			</Select>
			<Input
				type="text"
				placeholder="Search"
				className="w-2/3 px-2 text-sm"
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
			/>
		</div>
	)
}

export default ControlBar
