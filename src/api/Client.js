import { create } from "apisauce";
import cache from "../utility/cache";

const api = create({
  baseURL: "http://192.168.1.102:5000",
});

// Keep reference to the original GET
const originalGet = api.get;

// Override GET
api.get = async (url, params, axiosConfig) => {
  const response = await originalGet(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const cachedData = await cache.get(url);
  return cachedData ? { ok: true, data: cachedData } : response;
};

export default api;
