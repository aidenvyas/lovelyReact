import React, { Suspense } from 'react';
import { createApiResource } from './Apicall';
import { RandomPost } from './randomPost';
const resource = createApiResource(
  'https://jsonplaceholder.typicode.com/posts'
);

const comment = createApiResource(
  'https://jsonplaceholder.typicode.com/comments'
);

export default () => {
  return (
    <div>
      <h1>My First Post</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <RandomPost resource={resource} />
      </Suspense>
      <h2>My First Comment</h2>
      <Suspense fallback={<h1>Loading...</h1>}>
        <RandomPost resource={comment} />
      </Suspense>
    </div>
  );
};
