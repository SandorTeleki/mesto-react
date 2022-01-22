function Card (props) {
    function handleClick() {
      props.onCardClick(props.card);
    }

    return (
      (<li className="card" >
        <img className="card__picture" onClick={handleClick} src={props.card.link} alt={`${props.card.name}`}/> 
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-section">
          <button type="button" className="card__reaction" aria-label="лайк">{}</button>
          <span className="card__like-quantity">{props.card.likes.length}</span>
        </div>
        <button type="button"className="card__delete" aria-label="удалить">{}</button>
      </li>)
    )
  }
  
export default Card;

