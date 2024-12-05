import { Select, SelectTrigger, SelectValue } from '@/components/ui/select'
import SelectContentComponent from '@/components/SelectContentComponent'
import SelectStatusComponent from '@/components/SelectStatusComponent'
import { Input } from '@/components/ui/input'

interface ControlBarProps {
	selectedCategory: string
	setSelectedCategory: (value: string) => void
	searchQuery: string
	setSearchQuery: (value: string) => void
	selectedStatus: string
	setSelectedStatus: (value: string) => void
}

const ControlBar: React.FC<ControlBarProps> = ({
	selectedCategory,
	setSelectedCategory,
	searchQuery,
	setSearchQuery,
	selectedStatus,
	setSelectedStatus,
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

	const statusColors: { [key: string]: string } = {
		watched: 'dark:text-green-400',
		pending: 'dark:text-yellow-400',
		dropped: 'dark:text-red-400',
	}
	const categoryColor = categoryColors[selectedCategory] || ''
	const statusColor = statusColors[selectedStatus] || ''

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
			<Select defaultValue={selectedStatus} onValueChange={setSelectedStatus}>
				<SelectTrigger className={`w-[120px] font-medium px-2 text-sm ${statusColor}`}>
					<SelectValue />
				</SelectTrigger>
				<SelectStatusComponent />
			</Select>
		</div>
	)
}

export default ControlBar
