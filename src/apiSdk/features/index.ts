import axios from 'axios';
import queryString from 'query-string';
import { FeatureInterface, FeatureGetQueryInterface } from 'interfaces/feature';
import { GetQueryInterface } from '../../interfaces';

export const getFeatures = async (query?: FeatureGetQueryInterface) => {
  const response = await axios.get(`/api/features${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createFeature = async (feature: FeatureInterface) => {
  const response = await axios.post('/api/features', feature);
  return response.data;
};

export const updateFeatureById = async (id: string, feature: FeatureInterface) => {
  const response = await axios.put(`/api/features/${id}`, feature);
  return response.data;
};

export const getFeatureById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/features/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteFeatureById = async (id: string) => {
  const response = await axios.delete(`/api/features/${id}`);
  return response.data;
};
