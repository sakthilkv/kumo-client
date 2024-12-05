import { useState } from 'react'
import ControlBar from '@/components/ControlBar'
import CardGrid from '@/components/CardGrid'
import { Link } from 'react-router-dom'

export default function Dashboard() {
	const [selectedCategory, setSelectedCategory] = useState<string>('movie')
	const [searchQuery, setSearchQuery] = useState<string>('')
	const [selectedStatus, setSelectedStatus] = useState<string>('all')
	const mediaContent = [
		{
			id: '1',
			url: 'https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@.jpg',
			name: 'The Grand Budapest Hotel',
			type: 'movie',
		},
		{
			id: '1',
			url: 'https://m.media-amazon.com/images/M/MV5BM2ZmNjQ2MzAtNDlhNi00MmQyLWJhZDMtNmJiMjFlOWY4MzcxXkEyXkFqcGc@.jpg',
			name: 'Guardians of the Galaxy',
			type: 'movie',
		},
		{
			id: '1',
			url: 'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@.jpg',
			name: 'Into the Spider-Verse',
			type: 'movie',
		},
		{
			id: '1',
			url: 'https://m.media-amazon.com/images/M/MV5BMjIzMzA1OTkzNV5BMl5BanBnXkFtZTgwODE3MjM4NzE@.jpg',
			name: 'The Secret Life of Pets',
			type: 'movie',
		},
		{
			id: '1',
			url: 'https://m.media-amazon.com/images/M/MV5BNTg2OTY2ODg5OF5BMl5BanBnXkFtZTcwODM5MTYxOA@@.jpg',
			name: 'Life of Pi',
			type: 'movie',
		},
		{
			id: '1',
			url: 'https://m.media-amazon.com/images/M/MV5BMDIyM2E2NTAtMzlhNy00ZGUxLWI1NjgtZDY5MzhiMDc5NGU3XkEyXkFqcGc@.jpg',
			name: 'Coco',
			type: 'movie',
		},
		{
			id: '1',
			url: 'https://m.media-amazon.com/images/M/MV5BZDRkODJhOTgtOTc1OC00NTgzLTk4NjItNDgxZDY4YjlmNDY2XkEyXkFqcGc@.jpg',
			name: 'Mad Max: Fury Road',
			type: 'movie',
		},
		{
			id: '1',
			url: 'https://m.media-amazon.com/images/M/MV5BYjBkOWUwODYtYWI3YS00N2I0LWEyYTktOTJjM2YzOTc3ZDNlXkEyXkFqcGc@.jpg',
			name: 'The Lion King',
			type: 'movie',
		},
		{
			id: '1',
			url: 'https://m.media-amazon.com/images/M/MV5BMjQ2ODIyMjY4MF5BMl5BanBnXkFtZTgwNzY4ODI2NzM@.jpg',
			name: 'Aladdin',
			type: 'movie',
		},
		{
			id: '1',
			url: 'https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@.jpg',
			name: 'Doctor Strange',
			type: 'movie',
		},
		{
			id: '1',
			url: 'https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@.jpg',
			name: 'The Lego Movie',
			type: 'movie',
		},
		{
			id: '1',
			url: 'https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@.jpg',
			name: 'Thor: Ragnarok',
			type: 'movie',
		},
		{
			id: '1',
			url: 'https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@.jpg',
			name: 'The Grand Budapest Hotel',
			type: 'movie',
		},
		{
			id: '1',
			url: 'https://m.media-amazon.com/images/M/MV5BM2ZmNjQ2MzAtNDlhNi00MmQyLWJhZDMtNmJiMjFlOWY4MzcxXkEyXkFqcGc@.jpg',
			name: 'Guardians of the Galaxy',
			type: 'movie',
		},
		{
			id: '1',
			url: 'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@.jpg',
			name: 'Into the Spider-Verse',
			type: 'movie',
		},
		{
			id: '1',
			url: 'https://m.media-amazon.com/images/M/MV5BMjIzMzA1OTkzNV5BMl5BanBnXkFtZTgwODE3MjM4NzE@.jpg',
			name: 'The Secret Life of Pets',
			type: 'movie',
		},
		{
			id: '1',
			url: 'https://m.media-amazon.com/images/M/MV5BNTg2OTY2ODg5OF5BMl5BanBnXkFtZTcwODM5MTYxOA@@.jpg',
			name: 'Life of Pi',
			type: 'movie',
		},
		{
			id: '1',
			url: 'https://m.media-amazon.com/images/M/MV5BMDIyM2E2NTAtMzlhNy00ZGUxLWI1NjgtZDY5MzhiMDc5NGU3XkEyXkFqcGc@.jpg',
			name: 'Coco',
			type: 'movie',
		},
		{
			id: '1',
			url: 'https://m.media-amazon.com/images/M/MV5BZDRkODJhOTgtOTc1OC00NTgzLTk4NjItNDgxZDY4YjlmNDY2XkEyXkFqcGc@.jpg',
			name: 'Mad Max: Fury Road',
			type: 'movie',
		},
		{
			id: '1',
			url: 'https://m.media-amazon.com/images/M/MV5BYjBkOWUwODYtYWI3YS00N2I0LWEyYTktOTJjM2YzOTc3ZDNlXkEyXkFqcGc@.jpg',
			name: 'The Lion King',
			type: 'movie',
		},
		{
			id: '1',
			url: 'https://m.media-amazon.com/images/M/MV5BMjQ2ODIyMjY4MF5BMl5BanBnXkFtZTgwNzY4ODI2NzM@.jpg',
			name: 'Aladdin',
			type: 'movie',
		},
		{
			id: '1',
			url: 'https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@.jpg',
			name: 'Doctor Strange',
			type: 'movie',
		},
		{
			id: '1',
			url: 'https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@.jpg',
			name: 'The Lego Movie',
			type: 'movie',
		},
		{
			id: '1',
			url: 'https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@.jpg',
			name: 'Thor: Ragnarok',
			type: 'movie',
		},
	]
	const cards = mediaContent.map((item, i) => (
		<Link to={`/${item.type}/${item.id}`} className="flex items-center">
			<div key={i} className="flex flex-col items-left">
				<div
					className="p-4 h-80 w-44 sm:w-1/2 md:w-48 border rounded-lg shadow-md flex items-center justify-center"
					style={{
						backgroundImage: `url('${item.url}')`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
					}}
				></div>
				<p className="mt-3 font-semibold text-left  line-clamp-2 ml-1">{item.name}</p>
				<p className="font-semibold text-left text-sm  text-gray-500 line-clamp-2 ml-1">2019</p>
			</div>
		</Link>
	))

	return (
		<div className="flex flex-col justify-center w-full pl-2 pr-2 m-0 p-0 mb-5">
			<ControlBar
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				selectedStatus={selectedStatus}
				setSelectedStatus={setSelectedStatus}
			/>
			{/* <div className="mt-5 text-center">
					<h1 className="text-xl font-bold">Category: {selectedCategory}</h1>
					<h1 className="text-xl font-bold">Search Query: {searchQuery}</h1>
					<h1 className="text-xl font-bold">Status: {selectedStatus}</h1>
				</div> */}
			<div className="flex justify-center mt-10 ml-2 md:ml-4">
				<CardGrid>{cards}</CardGrid>
			</div>
		</div>
	)
}
