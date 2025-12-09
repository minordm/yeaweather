import { useEffect, useState } from "react";

export function useFetch(url) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network connection false");
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (errorMessage) {
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { error, isLoading, data };
}
