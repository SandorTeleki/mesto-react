import Card from './Card.js';
import {api} from '../utils/api.js';
import {useEffect, useState} from 'react';

function Main(props) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then(res => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  useEffect(()=>{
    api.getInitialCards()
      .then(data => {
        setCards(data)
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar" onClick={props.onEditAvatar}>
            <img className="profile__picture" src={userAvatar} alt="фото профиля"/>
          </div>
          <div className="profile__info">
            <h1 className="profile__title">{userName}</h1>
            <p className="profile__description">{userDescription}</p>
            <button type="button" className="profile__edit-button" aria-label="знак редактировать" onClick={props.onEditProfile}>{}</button>
          </div>
        </div>
        <button type="button" className="profile__add-button" aria-label="знак добавить" onClick={props.onAddPlace}>{}</button>
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cards.map(item => <Card key={item._id} card={item} onCardClick={props.onCardClick}/>)}
        </ul>
      </section>
    </main>
  )
}

export default Main