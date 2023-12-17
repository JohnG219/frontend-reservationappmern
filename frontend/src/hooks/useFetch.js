import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (endpoint) => {
  const baseUrl = "https://backend-server-reservation.onrender.com/api"; 
  const url = `${baseUrl}${endpoint}`;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const token = "oa0F0YPnh1GorYRb79huw4JGlG1A+Nb7UYVVmQXGvNs="; 
        const res = await axios.get(url, { headers: { Authorization: `Bearer ${token}` } });
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
       const token = "oa0F0YPnh1GorYRb79huw4JGlG1A+Nb7UYVVmQXGvNs=";
      const res = await axios.get(url, { headers: { Authorization: `Bearer ${token}` } });
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
