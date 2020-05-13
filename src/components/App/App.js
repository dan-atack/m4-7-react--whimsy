import React from 'react';
import styled from 'styled-components';
import { format, compareAsc } from 'date-fns';
import 'focus-visible';
import { TwitContext } from '../TwitContext';

import avatar from '../../assets/carmen-sandiego.png';

import Tweet from '../Tweet';

const App = () => {

  const {
    state: { numOfLikes, numOfRetweets, isLiked, isRetweeted },
    actions: {handleToggleLike, handleToggleRetweet}
  } = React.useContext(TwitContext);

  return (
    <Wrapper>
      <Tweet
        tweetContents="Where in the world am I?"
        displayName="Carmen Sandiego ✨"
        username="carmen-sandiego"
        avatarSrc={avatar}
        // holy cow, who'd have thought date formatting could be so cool!
        timestamp={format(new Date(), 'h:mm b MMM do, yyyy')}
        numOfLikes={numOfLikes}
        numOfRetweets={numOfRetweets}
        isLikedByCurrentUser={isLiked}
        isRetweetedByCurrentUser={isRetweeted}
        handleToggleLike={handleToggleLike}
        handleToggleRetweet={handleToggleRetweet}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;
export default App;
