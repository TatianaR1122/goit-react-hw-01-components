import profileData from '../data/user';
import data from '../data/data';
import friends from '../data/friends';
import transactions from '../data/transactions';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import Container from './Container/Container';


export const App = () => {
  return (
   <Container>
    <Profile
        username={profileData.username}
        tag={profileData.tag}
        location={profileData.location}
        avatar={profileData.avatar}
        stats={profileData.stats}
      />
    <Statistics title="Upload stats" stats={data} /> 
    <FriendList friends={friends}/>
    <TransactionHistory transactions={transactions}/>
   </Container>
  );
};
