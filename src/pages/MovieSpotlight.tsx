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
	FaMagic,
	FaFighterJet,
	FaSearch,
} from 'react-icons/fa'
import { FaFilm, FaMusic, FaBook, FaHeart } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import TimeInput from '@/components/TImeInput'
import { FaBiohazard, FaChild, FaHatCowboy, FaLandmark, FaTv, FaUserSecret } from 'react-icons/fa6'
import { apiUrl, UserID } from '@/lib/Constants'
import { Loader2 } from 'lucide-react'
const genreId: Record<number, string> = {
	28: 'Action',
	12: 'Adventure',
	16: 'Animation',
	35: 'Comedy',
	80: 'Crime',
	99: 'Documentary',
	18: 'Drama',
	10751: 'Family',
	14: 'Fantasy',
	36: 'History',
	27: 'Horror',
	10402: 'Music',
	9648: 'Mystery',
	10749: 'Romance',
	878: 'Sci-Fi',
	10770: 'TV Movie',
	53: 'Thriller',
	10752: 'War',
	37: 'Western',
}

const genreIcons: Record<string, JSX.Element> = {
	Action: <FaBullhorn className="text-red-600" />,
	Comedy: <FaLaugh className="text-yellow-500" />,
	Drama: <FaTheaterMasks className="text-blue-600" />,
	Horror: <FaGhost className="text-purple-600" />,
	Romance: <FaHeart className="text-pink-600" />,
	Music: <FaMusic className="text-teal-600" />,
	'Sci-Fi': <FaBiohazard className="text-teal-600" />,
	Adventure: <FaMountain className="text-green-600" />,
	Documentary: <FaBook className="text-brown-600" />,
	Thriller: <FaExclamationTriangle className="text-orange-600" />,
	Animation: <FaFilm className="text-yellow-700" />,
	Family: <FaChild className="text-purple-500" />,
	Fantasy: <FaMagic className="text-green-500" />,
	History: <FaLandmark className="text-gray-600" />,
	Crime: <FaUserSecret className="text-red-800" />,
	War: <FaFighterJet className="text-gray-500" />,
	Western: <FaHatCowboy className="text-brown-600" />,
	Mystery: <FaSearch className="text-blue-800" />,
	'TV Movie': <FaTv className="text-gray-400" />,
}

const GenresParser: React.FC<{ genreIds: number[] }> = ({ genreIds }) => {
	const genres = genreIds.map((id) => genreId[id] || 'Unknown')

	return (
		<div className="flex flex-row gap-2 items-center flex-wrap">
			{genres.map((genre, index) => (
				<div key={index} className="flex items-center">
					{genreIcons[genre] || <FaFilm className="text-gray-600" />}
					<span className="ml-2 font-geist">{genre}</span>
					{index < genres.length - 1 && <span className="mx-1 text-gray-500">,</span>}
				</div>
			))}
		</div>
	)
}

const MovieSpotlight: React.FC = () => {
	const [movieData, setMovieData] = useState<any>(null)
	const [selectedStatus, setSelectedStatus] = useState<string>('')
	const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [movieId, setMovieId] = useState<string | null>(null)
	const [isSaved, setIsSaved] = useState(false)

	useEffect(() => {
		const id = window.location.href.split('/').filter(Boolean).pop()
		setMovieId(id || null)

		const fetchMovieData = async () => {
			if (!id) return
			try {
				const response = await fetch(`${apiUrl}media/movie/${id}`, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						uid: UserID,
					},
				})
				if (response.ok) {
					const data = await response.json()
					console.log(data)
					setMovieData(data)
				} else {
					console.error('Failed to fetch movie data')
				}
			} catch (error) {
				console.error('Error fetching movie data:', error)
			}
		}

		fetchMovieData()
	}, [])

	const handleStatusChange = (value: string) => {
		setSelectedStatus(value)
		setIsButtonDisabled(value === movieData.status)
	}

	const handleSaveClick = async () => {
		if (!movieId) return
		setIsLoading(true)
		setIsButtonDisabled(true)

		try {
			const response = await fetch(
				`${apiUrl}user/add_media?media_id=${movieId}&media_type=${movieData.media_type}&status=${selectedStatus}`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						uid: UserID,
					},
				},
			)
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`)
			}
			const data = await response.json()
			console.log('Save API Response:', data)
			setIsSaved(true)
		} catch (error) {
			console.error('Error while saving:', error)
		} finally {
			setIsLoading(false)
			setIsButtonDisabled(false)
		}
	}

	if (!movieData) {
		return (
			<div className="flex flex-col justify-center items-center h-[80vh] md:flex-row w-full">
				<Loader2 className="animate-spin" size={60} />
			</div>
		)
	}

	return (
		<>
			<div className="flex flex-col md:flex-row w-full">
				<div className="flex flex-col items-left justify-center ml-10 mt-14 md:mr-0 mr-7">
					<img
						src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movieData.poster_url}`}
						alt={movieData.title}
						className="w-[30rem] rounded-md h-auto"
					/>
				</div>
				<div className="flex flex-col items-left ml-10 mt-14 gap-2">
					<div className="pb-2 md:w-[80rem] overflow-hidden">
						<span className="text-xl md:text-5xl mt-3 font-semibold  text-balance">
							{movieData.title}
						</span>
					</div>

					<div className="flex flex-row mt-2 gap-2 items-center">
						<FaUser className="text-gray-600" />
						<span className="md:text-lg font-semibold text-gray-600">{movieData.cbfc}</span>
						<span className="md:text-lg font-semibold text-gray-600">•</span>
						<FaCalendar className="text-gray-600" />
						<span className="md:text-lg font-semibold text-gray-600">
							{new Date(movieData.release_date).getFullYear()}
						</span>
						<span className="md:text-lg font-semibold text-gray-600">•</span>
						<FaClock className="text-gray-600" />
						<span className="md:text-lg font-semibold text-gray-600">
							{Math.floor(movieData.runtime / 60)}h {movieData.runtime % 60}min
						</span>
					</div>

					<div className="flex flex-row items-center gap-2 mt-4">
						<GenresParser genreIds={movieData.genre} />
					</div>

					<div className="w-[70rem] mt-3 max-w-full text-left overflow-hidden md:pr-0 pr-7">
						<span className="w-full text-lg font-geist">{movieData.plot}</span>
					</div>

					<div className="flex flex-col gap-3 mt-3 border rounded-lg w-fit p-3">
						<div className="flex flex-row items-center justify-between gap-3">
							<span>Status:</span>
							<Select defaultValue={movieData.status} onValueChange={handleStatusChange}>
								<SelectTrigger className="w-fit font-medium px-2 text-sm border">
									<SelectValue placeholder="Select" />
								</SelectTrigger>
								<SelectStatus />
							</Select>
						</div>
						<Button
							onClick={handleSaveClick}
							disabled={isButtonDisabled}
							className="flex items-center justify-center gap-2"
						>
							{isLoading ? (
								<Loader2 className="animate-spin" size={18} />
							) : isSaved ? (
								'Saved'
							) : (
								'Save'
							)}
						</Button>
					</div>
				</div>
			</div>
		</>
	)
}

export default MovieSpotlight
