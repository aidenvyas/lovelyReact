import { useState, useEffect } from 'react';

export const useFetch = url => {
  const [state, setState] = useState({
    data: [],
    isFetching: false,
    isError: false
  });

  useEffect(() => {
    setState(currentState => {
      return { ...currentState, isFetching: true };
    });
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          setState(currentState => {
            return {
              ...currentState,
              isFetching: true,
              isError: true
            };
          });
        }
      })
      .then(jsonResponse =>
        setState(currentState => {
          return { ...currentState, data: jsonResponse, isFetching: false };
        })
      );
  }, [url, setState]);

  return state;
};
