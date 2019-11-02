import React from 'react';

export default React.memo(({ increment }) => {
  console.log('yeyyyy');
  return <button onClick={increment}> Increment Post</button>;
});
