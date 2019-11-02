import React from 'react';
import { useFetch } from './useFetch';
import { url } from './config.json';
export default () => {
  const { data, isFetching, isError } = useFetch(url);
  return (
    <div>
      <h2>Posts:</h2>
      {!isError ? (
        isFetching ? (
          <h1>Loading...</h1>
        ) : (
          data &&
          data.length &&
          data.map(post => <li key={post.id}>{post.title}</li>)
        )
      ) : (
        <h2>Something Wrong!! please try later</h2>
      )}
    </div>
  );
};
