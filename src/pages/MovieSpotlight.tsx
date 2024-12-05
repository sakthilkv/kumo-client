export default function MovieSpotlight() {
	const id = window.location.href.split('/').filter(Boolean).pop()
	return (
		<>
			<div>
				<h1>{id}</h1>
			</div>
		</>
	)
}
