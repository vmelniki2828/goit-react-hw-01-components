import styled from 'styled-components';
export const FriendLiItem = styled.li`
  display: flex;
  align-items: center;
  margin: 8px;
  padding: 8px;
  box-shadow: 0px 5px 5px #00000021;
`;

export const OnlineStatus = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 20px;
  border-radius: 50%;
  background-color: ${props => {
    return props.status ? 'green' : 'red';
  }};
`;

export const FriendName = styled.p`
  margin: 0 auto;
  font-size: 20px;
  font-weight: bold;
`;