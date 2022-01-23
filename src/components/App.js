import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import {useState} from 'react';

function App(){

  const [isEditProfilePopupOpen, setEditProfilePopupState] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupState] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupState] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null)

  function handleEditAvatarClick() {
    setEditAvatarPopupState(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupState(true);
  }

  function handleAddPlaceClick(){
    setAddPlacePopupState(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setAddPlacePopupState(false);
    setEditProfilePopupState(false);
    setEditAvatarPopupState(false);
    setSelectedCard(null)
  }

  return (
    <div className="page">
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick} 
        onAddPlace={handleAddPlaceClick} 
        onEditAvatar={handleEditAvatarClick} 
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm name={'edit-profile-form'} title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <fieldset className={'popup__inputs'}>
            <input type="text" name="name" placeholder="имя" className="popup__input" id="nameinput" minLength="2" maxLength="40" required />
            <span className="nameinput-error popup__error" id="nameinput-error">{}</span>
            <input type="text" name="description" placeholder="работа" className="popup__input" id="jobdescription" minLength="2" maxLength="200" required />
            <span className="jobdescription-error popup__error" id="jobdescription-error">{}</span>
        </fieldset> 
      </PopupWithForm>
      <PopupWithForm name={'add-card-form'} title='Новое место' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <fieldset className={'popup__inputs'}>
          <input type="text" name="name" placeholder="Название" className="popup__input" id="add-title"  minLength="2" maxLength="30"required />
          <span className="add-title-error popup__error" id="title-error">{}</span>
          <input type="url" name="link" placeholder="Ссылка на картинку" className="popup__input" id="add-link" required/>
          <span className="add-link-error popup__error" id="url-error">{}</span>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm name={'update-avatar-form'} title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <fieldset className={'popup__inputs'}>
          <input type="url" name="link" placeholder="Ссылка на картинку профиля" className="popup__input" id="edit-link" required/>
          <span className="edit-link-error popup__error" id="edit-link-error">{}</span>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm name={'confirm-delete-form'} title='Вы уверены?'>
        <fieldset className={'popup__inputs'}>
        </fieldset>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
  )
}

export default App;
