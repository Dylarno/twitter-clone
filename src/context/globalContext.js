import React from 'react';

const GlobalContext = React.createContext(
    {
        mainAvatar: "https://pbs.twimg.com/profile_images/1268673564800139267/Nph2nyZ6_400x400.jpg",
        mainDisplayname: "Dylan",
        mainUsername: "@dylanmede_",
    }
);

// Provider
export const GlobalContextProvider = (props) => {

    return (
        <GlobalContext.Provider value={{mainAvatar: mainAvatar, mainDisplayname: mainDisplayname, mainUsername: mainUsername}}>
            {props.children}
        </GlobalContext.Provider>
    )
}