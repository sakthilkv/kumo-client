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
	return (
		<div className="control-bar flex flex-row mt-3 w-full justify-center gap-2 sticky">
			<Select defaultValue={selectedCategory} onValueChange={setSelectedCategory}>
				<SelectTrigger className="w-[130px] font-medium px-2 text-sm">
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
				<SelectTrigger className="w-[120px] font-medium px-2 text-sm">
					<SelectValue />
				</SelectTrigger>
				<SelectStatusComponent />
			</Select>
		</div>
	)
}

export default ControlBar
