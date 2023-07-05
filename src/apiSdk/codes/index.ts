import axios from 'axios';
import queryString from 'query-string';
import { CodeInterface, CodeGetQueryInterface } from 'interfaces/code';
import { GetQueryInterface } from '../../interfaces';

export const getCodes = async (query?: CodeGetQueryInterface) => {
  const response = await axios.get(`/api/codes${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createCode = async (code: CodeInterface) => {
  const response = await axios.post('/api/codes', code);
  return response.data;
};

export const updateCodeById = async (id: string, code: CodeInterface) => {
  const response = await axios.put(`/api/codes/${id}`, code);
  return response.data;
};

export const getCodeById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/codes/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCodeById = async (id: string) => {
  const response = await axios.delete(`/api/codes/${id}`);
  return response.data;
};
