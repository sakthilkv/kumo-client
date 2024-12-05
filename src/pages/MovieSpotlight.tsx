import { FaUser, FaCalendar, FaClock } from 'react-icons/fa'

export default function MovieSpotlight() {
	const id = window.location.href.split('/').filter(Boolean).pop()
	return (
		<>
			<div className="flex flex-col md:flex-row w-full">
				<div className="flex flex-col items-left justify-center ml-10 mt-14 md:mr-0 mr-7">
					<img
						src="https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@.jpg"
						alt="Image"
						className="w-[30rem] rounded-md h-auto "
					/>
				</div>
				<div className="flex flex-col items-left ml-10 mt-14">
					<div className="md:w-[80rem] overflow-hidden">
						<span className="text-xl md:text-5xl mt-3 font-semibold w-96 text-balance">
							Spider-Man: Into the Spider-Verse
						</span>
					</div>

					<div className="flex flex-row mt-4 ml-[0.5rem] gap-2 items-center">
						<FaUser className="text-gray-600" />
						<span className="md:text-lg font-semibold text-gray-600">U</span>
						<span className="md:text-lg font-semibold text-gray-600">•</span>
						<FaCalendar className="text-gray-600" />
						<span className="md:text-lg font-semibold text-gray-600">2018</span>
						<span className="md:text-lg font-semibold text-gray-600">•</span>
						<FaClock className="text-gray-600" />
						<span className="md:text-lg font-semibold text-gray-600">1h 56min</span>
					</div>
					<div className="w-[70rem] mt-3 max-w-full text-justify overflow-hidden md:pr-0 pr-7">
						<span className="w-full text-lg ">
							Teen Miles Morales becomes the Spider-Man of his universe and must join with five
							spider-powered individuals from other dimensions to stop a threat for all realities.
						</span>
					</div>
				</div>
			</div>
		</>
	)
}
