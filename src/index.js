import './style.css';
import allShowsLen from './modules/allShowsLen.js';
import getAllShows from './modules/getAllShows.js';
import addShowToDom from './modules/addShowToDom.js';
import getLikes from './modules/getLikes.js';

getAllShows().then(async (res) => {
  allShowsLen(res);
  const combineData = [];
  await res.forEach((val) => {
    combineData.push({
      name: val.name,
      id: val.id,
      image: val.image.medium,
      likes: 0,
    });
  });
  await getLikes().then(async (res) => {
    await res.forEach((like) => {
      combineData.forEach((data) => {
        if (Number(like.item_id) === data.id) data.likes = like.likes;
      });
    });
  });
  combineData.forEach((val) => addShowToDom(val));
});