import './card.scss'

function Card({id, title, image}) {
	return (
	
			<article key={id} className="card">
				<a href={'/housing/' + id}>
					<img className="image" src={image} alt={title}/>
					<h1 className="titleCard">{title}</h1>
				</a>
			</article>
		)
	}
export default Card
