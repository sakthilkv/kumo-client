import { SelectContent, SelectGroup, SelectItem, SelectLabel } from '@/components/ui/select'
import {
	FaBook,
	FaBookOpen,
	FaBookOpenReader,
	FaDragon,
	FaFilm,
	FaGamepad,
	FaTv,
} from 'react-icons/fa6'

interface IconWithNameProps {
	icon: React.ReactNode
	name: string
}

const IconWithName: React.FC<IconWithNameProps> = ({ icon, name }) => {
	return (
		<div className="flex items-center gap-2">
			{icon}
			{name}
		</div>
	)
}

const SelectContentComponent = () => {
	return (
		<SelectContent>
			<SelectGroup>
				<SelectLabel className="text-yellow-700">Media Types</SelectLabel>
				<SelectItem value="movie" className="dark:text-blue-400">
					<IconWithName icon={<FaFilm />} name="Movies" />
				</SelectItem>
				<SelectItem value="tvseries" className="dark:text-teal-400">
					<IconWithName icon={<FaTv />} name="TV Series" />
				</SelectItem>
				<SelectItem value="anime" className="dark:text-red-400">
					<IconWithName icon={<FaDragon />} name="Anime" />
				</SelectItem>
				<SelectItem value="manga" className="dark:text-purple-400">
					<IconWithName icon={<FaBookOpen />} name="Manga" />
				</SelectItem>
				<SelectItem value="books" className="dark:text-green-400">
					<IconWithName icon={<FaBook />} name="Books" />
				</SelectItem>
				<SelectItem value="games" className="dark:text-yellow-400">
					<IconWithName icon={<FaGamepad />} name="Games" />
				</SelectItem>
				<SelectItem value="lightnovel" className="dark:text-orange-400">
					<IconWithName icon={<FaBookOpenReader />} name="Light Novel" />
				</SelectItem>
			</SelectGroup>
		</SelectContent>
	)
}

export default SelectContentComponent
