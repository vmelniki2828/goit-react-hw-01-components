import PropTypes from 'prop-types';
import styles from './Statistics.module.css'

const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className={styles.statistics}>
        {title && (<h2 className={styles.title}>{title}</h2>)}

        <ul className={styles.stat__list}>
          {stats.map(state => {
            return (
              <li key={state.id} className={styles.item}>
                <span className={styles.label}>{state.label}</span>
                <span className={styles.percentage}>{state.percentage}</span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};

export default Statistics;
