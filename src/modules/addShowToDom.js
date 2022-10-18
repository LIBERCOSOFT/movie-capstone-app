import EventListeners from './eventListeners.js';

const addShowToDom = (show) => {
  const showsContainer = document.querySelector('.movies__container');
  const movieItem = document.createElement('div');
  movieItem.className = 'movie__item';
  const image = document.createElement('img');
  image.src = `${show.image.medium}`;
  image.alt = 'film poster';
  const movieTitle = document.createElement('div');
  movieTitle.classList = 'movie__title';
  const movieName = document.createElement('p');
  movieName.innerText = `${show.name}`;
  movieName.style.fontWeight = '700';
  const likesContainer = document.createElement('div');
  const like = document.createElement('i');
  like.id = `like-btn-${show.id}`;
  like.classList = 'fa-regular fa-heart';
  like.addEventListener('click', EventListeners.likeClick);
  const likesNum = document.createElement('p');
  likesNum.innerText = '5 likes';
  const commentBtn = document.createElement('button');
  commentBtn.type = 'button';
  commentBtn.id = `comment-btn-${show.id}`;
  commentBtn.innerText = 'Comments';
  const reservationBtn = document.createElement('button');
  reservationBtn.type = 'button';
  reservationBtn.id = `reservation-btn-${show.id}`;
  reservationBtn.innerText = 'Reservations';

  movieItem.appendChild(image);
  movieTitle.appendChild(movieName);
  likesContainer.appendChild(like);
  likesContainer.appendChild(likesNum);
  movieTitle.appendChild(likesContainer);
  movieItem.appendChild(movieTitle);
  movieItem.appendChild(commentBtn);
  movieItem.appendChild(reservationBtn);
  showsContainer.appendChild(movieItem);
};

export default addShowToDom;