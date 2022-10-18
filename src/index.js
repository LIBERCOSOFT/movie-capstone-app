// css files here
import './style.css';
import allShowsLen from './modules/allShowsLen.js';
import getAllShows from './modules/getAllShows.js';
import addShowToDom from './modules/addShowToDom.js';

getAllShows().then(async (res) => {
  allShowsLen(res);
  await res.forEach((val) => addShowToDom(val));
});
