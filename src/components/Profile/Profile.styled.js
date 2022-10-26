import styled from 'styled-components';

export const ProfileDiv = styled.div`
    width: 350px;
    padding: 12px;
    box-shadow: 0px 5px 5px #00000021;
`;

export const ProfileDesc = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ProfileImg = styled.img`
  width: 100px;
  border-radius: 50%;
  background-color: #0f9eff;
`;

export const ProfileName = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

export const ProfileStats = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
`;

export const ProfileItem = styled.li`
  width: 100%;
  padding: 24px 8px;
  border: 1px solid gray;
  align-items: center;
  justify-content: center;
  background-color: #b3b6b7;
`;

export const ProfileInfo = styled.p`
    color: gray;
`;

export const ProfileLabel = styled.span`
    display: block;
    text-align: center;
`;

export const ProfileQuantity = styled.span`
    display:block;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
`;

