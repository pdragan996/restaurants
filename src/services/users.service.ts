import axios from 'axios';
import { Credentials } from '../models/credentials.model';
import { User, UserBasic } from '../models/user.model';
import { serverUrl } from '../shared/config';

const url = `${serverUrl}users`;

export const addNewUser = async (user: UserBasic): Promise<void> => {
  const response = await axios.post(url, user);
  console.log(response);
};

export const getUsers = async (): Promise<User[]> => {
  return (await axios.get(url)).data;
};

export const login = async (credentials: Credentials) => {
  const response = await axios.post(`${serverUrl}login`, credentials);
  console.log(response);
  return response?.data || null;
};