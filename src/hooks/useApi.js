import { useState } from "react";
import getListing from "../api/Listing";
export default function useApi() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    const response = await getListing();
    setLoading(false);

    if (!response.ok) {
      setError(true);
      return;
    }

    setError(false);
    setData(response.data);
  };

  return { data, error, loading, request };
}
