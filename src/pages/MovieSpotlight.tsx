import { useState, useEffect } from 'react'
import SelectStatus from '@/components/SelectStatus'
import { Select, SelectTrigger, SelectValue } from '@/components/ui/select'
import {
	FaUser,
	FaCalendar,
	FaClock,
	FaBullhorn,
	FaTheaterMasks,
	FaGhost,
	FaMountain,
	FaExclamationTriangle,
	FaLaugh,
} from 'react-icons/fa'
import { FaFilm, FaMusic, FaBook, FaHeart } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

interface GenresParserProps {
	genres: string[]
}

const genreIcons: Record<string, JSX.Element> = {
	Action: <FaBullhorn className="text-red-600" />, // Red for Action
	Comedy: <FaLaugh className="text-yellow-500" />, // Yellow for Comedy
	Drama: <FaTheaterMasks className="text-blue-600" />, // Blue for Drama
	Horror: <FaGhost className="text-purple-600" />, // Purple for Horror
	Romance: <FaHeart className="text-pink-600" />, // Pink for Romance
	Music: <FaMusic className="text-teal-600" />, // Teal for Music
	Adventure: <FaMountain className="text-green-600" />, // Green for Adventure
	Documentary: <FaBook className="text-brown-600" />, // Brown for Documentary
	Thriller: <FaExclamationTriangle className="text-orange-600" />, // Orange for Thriller
}

const GenresParser: React.FC<GenresParserProps> = ({ genres }) => {
	return (
		<div className="flex flex-row gap-1 items-center flex-wrap">
			{genres.map((genre, index) => (
				<div key={index} className="flex items-center">
					{genreIcons[genre] || <FaFilm />}
					<span className="md:text-lg ml-2 font-geist">{genre}</span>
					{index < genres.length - 1 && <span className="mx-1">,</span>}
				</div>
			))}
		</div>
	)
}

const MovieSpotlight: React.FC = () => {
	const [selectedStatus, setSelectedStatus] = useState<string>('')
	const [movieId, setMovieId] = useState<string | null>(null)
	const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true)
	useEffect(() => {
		// Safely access window.location
		const id = window.location.href.split('/').filter(Boolean).pop()
		setMovieId(id || null)
	}, [])

	const handleStatusChange = (value: string) => {
		setSelectedStatus(value)
		setIsButtonDisabled(value === 'none') // Enable button if value is not 'none'
	}
	const genres = ['Action', 'Comedy', 'Romance', 'Drama', 'Horror']

	return (
		<>
			<div className="flex flex-col md:flex-row w-full">
				<div className="flex flex-col items-left justify-center ml-10 mt-14 md:mr-0 mr-7">
					<img
						src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg"
						alt="Image"
						className="w-[30rem] rounded-md h-auto"
					/>
				</div>
				<div className="flex flex-col items-left ml-10 mt-14 gap-2">
					<div className="md:w-[80rem] overflow-hidden">
						<span className="text-xl md:text-5xl mt-3 font-semibold w-96 text-balance">
							Spider-Man: Into the Spider-Verse
						</span>
					</div>

					<div className="flex flex-row mt-4 gap-2 items-center">
						<FaUser className="text-gray-600" />
						<span className="md:text-lg font-semibold text-gray-600">U</span>
						<span className="md:text-lg font-semibold text-gray-600">•</span>
						<FaCalendar className="text-gray-600" />
						<span className="md:text-lg font-semibold text-gray-600">2018</span>
						<span className="md:text-lg font-semibold text-gray-600">•</span>
						<FaClock className="text-gray-600" />
						<span className="md:text-lg font-semibold text-gray-600">1h 56min</span>
					</div>

					<div className="flex flex-row items-center gap-2 mt-4">
						<p className="font-bold text-lg">Genre:</p>
						<GenresParser genres={genres} />
					</div>

					<div className="w-[70rem] mt-3 max-w-full text-justify overflow-hidden md:pr-0 pr-7">
						<span className="w-full text-lg font-geist">
							Struggling to find his place in the world while juggling school and family, Brooklyn
							teenager Miles Morales is unexpectedly bitten by a radioactive spider and develops
							unfathomable powers just like the one and only Spider-Man. While wrestling with the
							implications of his new abilities, Miles discovers a super collider created by the
							madman Wilson "Kingpin" Fisk, causing others from across the Spider-Verse to be
							inadvertently transported to his dimension.
						</span>
					</div>

					<div className="flex flex-row items-center gap-3 mt-3 border rounded-lg w-fit p-3">
						<span>Status:</span>
						<Select defaultValue="none" onValueChange={handleStatusChange}>
							<SelectTrigger className="w-fit font-medium px-2 text-sm border">
								<SelectValue placeholder="Select" />
							</SelectTrigger>
							<SelectStatus />
						</Select>
						<Button disabled={isButtonDisabled}>Save</Button>
					</div>
				</div>
			</div>
		</>
	)
}

export default MovieSpotlight
