// import { useState } from "react";
// import { getListing } from "../api/Listing";
// export default function useApi() {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const request = async () => {
//     setLoading(true);
//     const response = await getListing();
//     setLoading(false);

//     if (!response.ok) {
//       setError(true);
//       return;
//     }

//     setError(false);
//     setData(response.data);
//   };

//   return { data, error, loading, request };
// }

import { useState } from "react";
import { getListing } from "../api/Listing";

export default function useApi() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    try {
      setLoading(true);
      setError(false);

      const response = await getListing();

      if (!response.ok) {
        throw new Error(response.problem || "Request failed");
      }

      setData(response.data);
    } catch (err) {
      setError(true);
      console.error("API Error:", err);
      // Optional: return error for component handling
      return { error: true, message: err.message };
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, request };
}
