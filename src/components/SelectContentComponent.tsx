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
		<div className="flex items-center gap-2 dark:text-yellow-400">
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
				<SelectItem value="movie">
					<IconWithName icon={<FaFilm />} name="Movies" />
				</SelectItem>
				<SelectItem value="tvseries">
					<IconWithName icon={<FaTv />} name="TV Series" />
				</SelectItem>
				<SelectItem value="anime">
					<IconWithName icon={<FaDragon />} name="Anime" />
				</SelectItem>
				<SelectItem value="manga">
					<IconWithName icon={<FaBookOpen />} name="Manga" />
				</SelectItem>
				<SelectItem value="books">
					<IconWithName icon={<FaBook />} name="Books" />
				</SelectItem>
				<SelectItem value="games">
					<IconWithName icon={<FaGamepad />} name="Games" />
				</SelectItem>
				<SelectItem value="lightnovel">
					<IconWithName icon={<FaBookOpenReader />} name="Light Novel" />
				</SelectItem>
			</SelectGroup>
		</SelectContent>
	)
}

export default SelectContentComponent
