const initialCards = [
  {
    name: 'Yosemite Valley',
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg"
  },
  {
    name: 'Lake Louise',
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg"
  },
  {
    name: 'Bald Mountains',
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg"
  },
  {
    name: 'Latemar',
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg"
  },
  {
    name: 'Vanoise National Park',
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg"
  },
  {
    name: 'Lago di Braies',
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg"
  }

];


/********************************
 *        Elements                  *
********************************/


const profileEditBtn = document.querySelector('#edit-profile-button');
const profileEditModal = document.querySelector('#profile-edit-modal');
const modalCloseBtn = profileEditModal.querySelector('#modal-close-button');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileEditInput = document.querySelector('#profile-title-input');
const profileEditDescriptionInput = document.querySelector('#profile-description-input');
const profileEditForm = profileEditModal.querySelector('.modal__form');

/********************************
 *        Functions                  *
********************************/


function closePopop() {
  profileEditModal.classList.remove('modal_opened');
}

/********************************
 *        Event Handlers                  *
********************************/
function handleProfileFormSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileEditDescriptionInput.value;
  closePopop();
}



/********************************
 *        Event Listeners                  *
********************************/


profileEditBtn.addEventListener('click', () => {
  profileTitleInput.value = profileTitle.textContent;
  profileEditDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add('modal_opened')
});

modalCloseBtn.addEventListener('click', closePopop);



profileEditForm.addEventListener('submit', handleProfileFormSubmit);