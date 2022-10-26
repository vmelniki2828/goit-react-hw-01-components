import styled from 'styled-components';

const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  return "#" + randomColor;
}

console.log(setBg());

export const StatisticsBox = styled.section`
  width: 350px;
  padding: 12px;
  text-align: center;
  box-shadow: 0px 5px 5px #00000021;
`;
export const StatisticsTitle = styled.h2`
  text-transform: uppercase;
  color: grey;
`;
export const StatisticsList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  list-style: none;
`;
export const StatisticsListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 8px;
  border: 1px solid black;
background-color: ${setBg};
`;

export const StatisticsType = styled.span`
    color: white;
`;

