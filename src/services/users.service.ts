import axios from 'axios';
import { serverUrl } from '../shared/config';
import { User, UserBasic } from '../shared/models/user.model';

const url = `${serverUrl}users`;

export const addNewUser = async (user: UserBasic): Promise<void> => {
  await axios.post(url, user);
};

export const getUsers = async (): Promise<User[]> => {
  return (await axios.get(url)).data;
};