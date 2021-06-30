import React from 'react';

function Title() {
  console.log(`Rendered Title`);
  return (
    <div>
      <h1>useCallback Title</h1>
    </div>
  );
}

export default React.memo(Title);
