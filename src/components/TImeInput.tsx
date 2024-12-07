import React, { useState } from 'react'
import { Input } from './ui/input'

interface TimeInputProps {
	onTimeChange: (time: string) => void
}

const TimeInput: React.FC<TimeInputProps> = ({ onTimeChange }) => {
	const [time, setTime] = useState({ hours: '00', minutes: '00', seconds: '00' })

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target

		const isValid = /^\d*$/.test(value) && Number(value) >= 0

		if (isValid) {
			const clampedValue = Math.min(Number(value), name === 'hours' ? 23 : 59)
				.toString()
				.padStart(2, '0')
			const updatedTime = { ...time, [name]: clampedValue }
			setTime(updatedTime)
			onTimeChange(`${updatedTime.hours}:${updatedTime.minutes}:${updatedTime.seconds}`)
		}
	}

	return (
		<div className="flex flex-col items-center space-y-2">
			<div className="flex space-x-2">
				<Input
					type="number"
					name="hours"
					value={time.hours}
					onChange={handleChange}
					className="border rounded-md p-2 w-16 text-center"
					placeholder="HH"
					min="0"
					max="23"
				/>
				<span>:</span>
				<Input
					type="number"
					name="minutes"
					value={time.minutes}
					onChange={handleChange}
					className="border rounded-md p-2 w-16 text-center"
					placeholder="MM"
					min="0"
					max="59"
				/>
				<span>:</span>
				<Input
					type="number"
					name="seconds"
					value={time.seconds}
					onChange={handleChange}
					className="border rounded-md p-2 w-16 text-center"
					placeholder="SS"
					min="0"
					max="59"
				/>
			</div>
		</div>
	)
}

export default TimeInput
