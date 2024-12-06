import { SelectContent, SelectGroup, SelectItem, SelectLabel } from '@/components/ui/select'
import {
	FaCheck,
	FaCirclePause,
	FaCirclePlay,
	FaList,
	FaCircleXmark,
	FaCalendarDays,
} from 'react-icons/fa6'
interface IconWithNameProps {
	icon: React.ReactNode
	name: string
}

const IconWithName: React.FC<IconWithNameProps> = ({ icon, name }) => {
	return (
		<div className="flex items-center gap-2 dark:text-purple-300">
			{icon}
			{name}
		</div>
	)
}

const SelectStatusComponent = () => {
	return (
		<SelectContent>
			<SelectGroup>
				<SelectLabel>Status</SelectLabel>
				<SelectItem value="none">
					<IconWithName icon={<FaList />} name="None" />
				</SelectItem>
				<SelectItem value="ongoing">
					<IconWithName icon={<FaCirclePlay />} name="Ongoing" />
				</SelectItem>
				<SelectItem value="completed">
					<IconWithName icon={<FaCheck />} name="Completed" />
				</SelectItem>
				<SelectItem value="dropped">
					<IconWithName icon={<FaCircleXmark />} name="Dropped" />
				</SelectItem>
				<SelectItem value="paused">
					<IconWithName icon={<FaCirclePause />} name="Paused" />
				</SelectItem>
				<SelectItem value="planned">
					<IconWithName icon={<FaCalendarDays />} name="Planned" />
				</SelectItem>
			</SelectGroup>
		</SelectContent>
	)
}

export default SelectStatusComponent
