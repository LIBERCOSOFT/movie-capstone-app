// css files here
import './style.css';
import allShowsLen from './modules/allShowsLen.js';
import getAllShows from './modules/getAllShows.js';

getAllShows().then((res) => allShowsLen(res));