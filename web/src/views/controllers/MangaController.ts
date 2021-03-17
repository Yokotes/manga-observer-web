import axios from 'axios';
import {
  dropManga,
  setMangaToUpload,
} from '../components/ProfileLink/ProfileSlice';
import { toggleIsInList } from '../containers/CatalogPage/CatalogSlice';
import { showErrorPopup, showMessagePopup } from './PopupController';
import { RootState } from '../store';

//
// @Description: Remove manga from user list
//  and send DELETE request to the server to delete user from subscribers
//  and to delete manga from user list
//
export const removeMangaFromUser = (id: string) => async (
  dispatch: any,
  getState: any,
) => {
  const state: RootState = getState();
  const profile = state.profile;
  const user = {
    userId: profile._id,
    authToken: profile.authToken,
  };

  await dispatch(removeMangaSubscriber(id, profile._id));
  await dispatch(removeMangaFromUserListField(user, id));
};

//
// @Description: Remove user id from manga's subscribers list
//
const removeMangaSubscriber = (mangaId: string, subscriberId: string) => async (
  dispatch: any,
) => {
  try {
    await axios.delete(`/api/v1/mangas/${mangaId}/users/${subscriberId}`);
  } catch (err) {
    dispatch(showErrorPopup(err));
  }
};

//
// @Description: Remove manga from user's field 'mangaList' on client and server
//
const removeMangaFromUserListField = (
  { userId, authToken }: { userId: string; authToken: string },
  mangaId: string,
) => async (dispatch: any) => {
  try {
    // Send DELETE request to the server
    const res = await axios.delete(`/api/v1/users/${userId}/manga/${mangaId}`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });

    // Show message 'Manga deleted' if no errors occur
    dispatch(showMessagePopup(res.data));

    // Toggle manga field 'isInList'
    dispatch(toggleIsInList(mangaId));

    // Delete manga from user field 'mangaList'
    dispatch(dropManga(mangaId));
  } catch (err) {
    dispatch(showErrorPopup(err));
  }
};

//
// @Description: Add manga to the user list
//  Send POST requests to the server.
//  And receive updated 'mangaToLoad' variable in response
//
export const addMangaToUser = (id: string) => async (
  dispatch: any,
  getState: any,
) => {
  const state: RootState = getState();
  const profile = state.profile;
  const userData = {
    userId: profile._id,
    authToken: profile.authToken,
  };

  await dispatch(addMangaSubscribers(id, [profile._id]));
  await dispatch(addMangaToUserListField(userData, id));
};

//
// @Description: Adding manga to user manga list on client and server
//
const addMangaToUserListField = (
  { userId, authToken }: { userId: string; authToken: string },
  mangaId: string,
) => async (dispatch: any) => {
  try {
    // Send POST request to server to add manga in user manga list.
    // And receive new manga list in response
    const res = await axios.post(`/api/v1/users/${userId}/manga`, [mangaId], {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    // Filter new manga list. Remove empty values
    const filteredMangaList = res.data.filter((id) => id !== '');

    // Toggle 'isInList' field of current manga card
    dispatch(toggleIsInList(mangaId));

    // Set filtered manga list to 'mangaToUpload' field
    dispatch(setMangaToUpload(filteredMangaList));

    // Show message about adding manga to user manga list
    dispatch(showMessagePopup('Manga was added in your list!'));
  } catch (err) {
    dispatch(showErrorPopup(err));
  }
};

//
// @Description: Adding subscribers to manga on server
//
const addMangaSubscribers = (mangaId: string, users: string[]) => async (
  dispatch: any,
) => {
  try {
    await axios.post(`/api/v1/mangas/${mangaId}/users`, users);
  } catch (err) {
    dispatch(showErrorPopup(err));
  }
};
