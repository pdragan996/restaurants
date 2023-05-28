import axios from 'axios';
import { User, UserBasic } from '../models/user.model';
import { serverUrl } from '../shared/config';

const url = `${serverUrl}users`;

export const addNewUser = async (user: UserBasic): Promise<void> => {
  await axios.post(url, user);
};

export const getUsers = async (): Promise<User[]> => {
  return (await axios.get(url)).data;
};