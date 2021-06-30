import React, { useContext } from 'react';

import { UserContext, ChannelContext } from './UseContext';

function UseContextData() {
  let user = useContext(UserContext);
  let channel = useContext(ChannelContext);
  return (
    <div>
      {user} {channel}
    </div>
  );
}

export default UseContextData;
