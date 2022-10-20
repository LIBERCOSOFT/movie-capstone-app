export default class EventListeners {
  static likeClick(e) {
    e.target.classList.toggle('fa-solid');
  }
}