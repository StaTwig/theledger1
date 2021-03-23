import axios from 'axios';

import { config } from '../config';
import { turnOff, turnOn } from './spinnerActions';

export const latestShipmentLocsById = async (id) => {
  try {
    const result = await axios.get('http://integrations.vaccineledger.com:8080/integrationmanagement/api/v1/roambee/latestgpsforshipmentid/'+id);
    return result;
  } catch (e) {
    return e.response;
  }
};

export const lastTenShipmentLocsById = async (id) => {
  try {
    const result = await axios.get('http://integrations.vaccineledger.com:8080/integrationmanagement/api/v1/roambee/lasttengpsforshipmentid/'+id);
    return result;
  } catch (e) {
    return e.response;
  }
};

export const allShipmentLocsById = async (id) => {
  try {
    const result = await axios.get('http://integrations.vaccineledger.com:8080/integrationmanagement/api/v1/roambee/allgpsforshipmentid/'+id);
    return result;
  } catch (e) {
    return e.response;
  }
};

export const latestShipmentTempById = async (id) => {
  try {
    const result = await axios.get('http://integrations.vaccineledger.com:8080/integrationmanagement/api/v1/roambee/latestiotdataforshipmentid/'+id);
    return result;
  } catch (e) {
    return e.response;
  }
};

export const lastTenShipmentTempById = async (id) => {
  try {
    const result = await axios.get('http://integrations.vaccineledger.com:8080/integrationmanagement/api/v1/roambee/lastteniotsamplesforshipmentid/'+id);
    return result;
  } catch (e) {
    return e.response;
  }
};

export const allShipmentTempById = async (id) => {
  try {
    const result = await axios.get('http://integrations.vaccineledger.com:8080/integrationmanagement/api/v1/roambee/alliotsamplesforshipmentid/'+id);
    return result;
  } catch (e) {
    return e.response;
  }
};