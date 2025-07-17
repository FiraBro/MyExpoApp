import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const isExpired = (item) => {
  const now = moment(Date.now());
  const storedTime = moment(item.timestamp);
  return now.diff(storedTime, "minutes");
};
const store = async (key, value) => {
  try {
    const item = {
      value: value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};
const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    const item = JSON.parse(value);
    if (!item) return null;
    isExpired(item);
  } catch (error) {
    console.log(error);
  }
};
export default {
  store,
  get,
};
