import axios from "axios";
import { config } from "../config";
import { turnOn, turnOff } from "./spinnerActions";


export const getAddressByLatLong = async (data) => {
    const { latitude, longitude } = data.coords;
    try {
      const result = await axios.get(
        `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?prox=${latitude},${longitude}&mode=retrieveAddresses&maxresults=1&gen=9&apiKey=BCRdhsq4jB8NxBG7vTWpVbNxCb6b50j98_f_bwiy7Qw`
      );
      return result.length > 0
        ? result.Response.View.Result[0].Location.Address
        : {};
    } catch (e) {
      return e.response;
    }
  };