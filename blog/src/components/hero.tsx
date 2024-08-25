export default function Hero({title, subtitle}: {title: string, subtitle: string}) {
	return (
		<div>
			<h1>{title}</h1>
			<p>{subtitle}</p>
		</div>
	)
}