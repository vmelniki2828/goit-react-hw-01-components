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
        {stats.map(stat => {
          return (
            <StatisticsListItem key={stat.id}>
              <StatisticsType>{stat.label}</StatisticsType>
              <StatisticsType>{stat.percentage}%</StatisticsType>
            </StatisticsListItem>
          );
        })}
      </StatisticsList>
    </StatisticsBox>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};