import React from 'react';

export default React.memo(({ increment }) => {
  return <button onClick={increment}> Increment Post</button>;
});
