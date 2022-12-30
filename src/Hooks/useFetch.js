import React, { useCallback } from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = response.json();
      if (response.ok === false) throw new Error(json.message);
    } catch (err) {
      json = null;
      setError(err.message);
    } finally {
      setData(json);
      setError(false);
      return { response, json };
    }
  }, []);

  return { data, error, loading };
};

export default useFetch;
