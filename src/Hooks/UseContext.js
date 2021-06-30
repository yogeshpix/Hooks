import React from 'react';
import UseContextData from './UseContextData';
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function UseContext() {
  return (
    <div>
      <UserContext.Provider value={'Yogesh'}>
        <ChannelContext.Provider value={'Singh'}>
          <UseContextData />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default UseContext;
