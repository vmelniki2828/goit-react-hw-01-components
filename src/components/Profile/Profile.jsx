import PropTypes from 'prop-types';

import { 
    ProfileDiv,
    ProfileImg,
    ProfileDesc,
    ProfileName,
    ProfileStats,
    ProfileItem,
    ProfileInfo,
    ProfileLabel,
    ProfileQuantity
} from './Profile.styled'

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileDiv>
      <ProfileDesc>
        <ProfileImg src={avatar} alt={username}/>
        <ProfileName>{username}</ProfileName>
        <ProfileInfo>@{tag}</ProfileInfo>
        <ProfileInfo>{location}</ProfileInfo>
      </ProfileDesc>

      <ProfileStats>
        <ProfileItem>
          <ProfileLabel>Followers</ProfileLabel>
          <ProfileQuantity>{stats.followers}</ProfileQuantity>
        </ProfileItem>
        <ProfileItem>
          <ProfileLabel>Views</ProfileLabel>
          <ProfileQuantity>{stats.views}</ProfileQuantity>
        </ProfileItem>
        <ProfileItem>
          <ProfileLabel>Likes</ProfileLabel>
          <ProfileQuantity>{stats.likes}</ProfileQuantity>
        </ProfileItem>
      </ProfileStats>
    </ProfileDiv>
  );
};
export default Profile;
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }).isRequired,
};