import PropTypes from 'prop-types';
import {
  StatisticsBox,
  StatisticsTitle,
  StatisticsList,
    StatisticsListItem,
  StatisticsType
} from './Statistics.styled';

const Statistics = ({ stats, title }) => {
  return (
    <StatisticsBox>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsList>
        {stats.map(stats => {
          return (
            <StatisticsListItem key={stats.id}>
              <StatisticsType>{stats.label}</StatisticsType>
              <StatisticsType>{stats.percentage}%</StatisticsType>
            </StatisticsListItem>
          );
        })}
      </StatisticsList>
    </StatisticsBox>
  );
};

export default Statistics;

Statistics.propType = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};