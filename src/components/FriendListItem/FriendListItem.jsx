import PropTypes from 'prop-types';
import {
  FriendLiItem,
  OnlineStatus,
  FriendName,
} from './FriendListItem.styled';
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendLiItem>
      <OnlineStatus status={isOnline}></OnlineStatus>
      <img src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendLiItem>
  );
};
export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};