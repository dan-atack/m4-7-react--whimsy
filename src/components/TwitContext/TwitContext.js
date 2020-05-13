import React from 'react';

// First, create context object (empty):
export const TwitContext = React.createContext(null);

// Next define the initial state - an empty object that will hold our tweet context information:
const initialState = {
    "numOfLikes": 0,
    "numOfRetweets": 0,
    "isLiked": false,
    "isRetweeted": false
};

// Next, set up the basic reducer function, which will hold switch cases for all the changes we'll make to the state in the app:
function reducer (state, action) {
    switch (action.type) {
      case "toggle-like":
          // whatever the state was before, a toggle button flips it
        state.isLiked = !(state.isLiked);
          // if state is liked (meaning, it has just now been changed to liked) add one like, otherwise subtract one:
        state.isLiked ? state.numOfLikes += 1 : state.numOfLikes -= 1;
        return {
            ...state,
        }
      case "toggle-retweet":
        state.isRetweeted = !(state.isRetweeted);
        state.isRetweeted ? state.numOfRetweets += 1 : state.numOfRetweets -= 1;
        return {
            ...state
        }
      default:
          throw new Error("Now you fucked up. Now you fucked up. Now you fucked up. You have fucked up now.");
    };
};
  
// Then we make the context provider, with the object {children} as its parameter:
export const TwitProvider = ({children}) => {
// Then, place the reducer dispatch function/s inside it, above the return statement. Note that this is where we link the reducer
// function to the initial state for the first time:
    const [state, dispatch] = React.useReducer(reducer, initialState);

// Then start defining individual dispatch functions, which are the reducer's equivalent of set state functions:
    const handleToggleLike = () => {
        dispatch({
            type: "toggle-like"
        });
    };

    const handleToggleRetweet = data => {
        dispatch({
            type: "toggle-retweet",
        })
    }

    return(
        <TwitContext.Provider
            value={{
                state,
                actions: {
                    handleToggleLike,
                    handleToggleRetweet
                }
            }}
        >
            {children}
        </TwitContext.Provider>
    )
};