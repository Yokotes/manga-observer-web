import axios from 'axios';
import {
  dropManga,
  setMangaToUpload,
} from '../components/ProfileLink/ProfileSlice';
import { addMessage } from '../components/PopUp/PopUpSlice';
import { toggleIsInList } from '../containers/CatalogPage/CatalogSlice';

//
// @Description: Remove manga from user list
//  and send DELETE request to the server to delete user from subscribers
//  and to delete manga from user list
//
export const removeFromList = (id: string, profile: any, dispatch: any) => {
  axios.delete(`/api/v1/mangas/${id}/users/${profile._id}`);
  axios
    .delete(`/api/v1/users/${profile._id}/manga/${id}`, {
      headers: {
        Authorization: `Bearer ${profile.authToken}`,
      },
    })
    .then((res) => {
      dispatch(
        addMessage({
          message: res.data,
          type: 'message',
        }),
      );
      dispatch(toggleIsInList(id));
      dispatch(dropManga(id));
    })
    .catch((error) => {
      console.log(error);
      const res = error.response;
      dispatch(
        addMessage({
          message: 'Error: ' + res.data.message,
          type: 'error',
        }),
      );
    });
};

//
// @Description: Add manga to the user list
//  Send POST requests to the server.
//  And receive updated 'mangaToLoad' variable in response
//
export const addMangaToList = (id: string, profile: any, dispatch: any) => {
  axios.post(`/api/v1/mangas/${id}/users`, [profile._id]);
  axios
    .post(`/api/v1/users/${profile._id}/manga`, [id], {
      headers: {
        Authorization: `Bearer ${profile.authToken}`,
      },
    })
    .then((res) => {
      dispatch(
        addMessage({
          message: 'Manga was added in your list!',
          type: 'message',
        }),
      );
      dispatch(toggleIsInList(id));
      const filteredData = res.data.filter((id) => id !== '');
      dispatch(setMangaToUpload(filteredData));
    })
    .catch((error) => {
      const res = error.response;
      dispatch(
        addMessage({
          message: 'Error: ' + res.data.message,
          type: 'error',
        }),
      );
    });
};
