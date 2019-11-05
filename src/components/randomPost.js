import React from 'react';

export const RandomPost = ({ resource }) => {
  const post = resource.details.getStats();

  return <span>{post[0].body}</span>;
};
