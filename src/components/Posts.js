import React, { useMemo, useState, useCallback, useContext } from 'react';
import { useFetch } from './useFetch';
import { url } from './config.json';
import Button from './button';
import Darkmode from './Darkmode';
export default () => {
  const { data, isFetching, isError } = useFetch(url);
  const [post, setPost] = useState(0);
  const { darkMode, setDarkMode } = useContext(Darkmode);
  const calculateLongestPost = useCallback(arr => {
    let longestPost = '';
    if (!arr) {
      return [];
    } else {
      arr.forEach(post => {
        if (longestPost.length < post.body.length) longestPost = post.body;
      });
    }
    return longestPost;
  }, []);

  const longestPost = useMemo(() => calculateLongestPost(data), [
    data,
    calculateLongestPost
  ]);

  const increment = useCallback(() => setPost(p => p + 1), [setPost]);
  return (
    <div>
      <div>
        <button
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          Toggle View
        </button>
      </div>
      <div>
        <h2>Current Post {post}:</h2>
        <span>{data.length && data[post].body}</span>
        <Button increment={increment} />
      </div>
      <hr />
      {data && (
        <span>
          <b>Longest Post :</b> {longestPost}
        </span>
      )}
      <hr />
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
