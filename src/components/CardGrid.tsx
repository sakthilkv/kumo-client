import React from 'react'

const CardGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const flexClasses = `flex flex-wrap justify-start w-full gap-5`

	return (
		<div className={flexClasses}>
			{React.Children.map(children, (child) => (
				<div className="flex-shrink-0 w-40 sm:w-1/2 md:w-52">{child}</div>
			))}
		</div>
	)
}

export default CardGrid
