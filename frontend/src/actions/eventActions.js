import { AUTH_SUCCESS, AUTH_ERROR, PROFILE_SUCCESS, GET_ALL_USERS_SUCCESS } from '../constants/userConstants';
import { config } from '../config';
import axios from 'axios';

export const getEventsByActorOrgId = async () => {
    try {    
        const result = await axios.get(config().getEventsByActorOrgId);
        return result;
    } catch (e) {
      return e.response;
    }
};

