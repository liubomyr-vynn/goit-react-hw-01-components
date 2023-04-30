import css from './Statistics.module.css';
import { getRandomHexColor } from 'Utils/RandomColor';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <div className="container">
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.statList}>
          {stats.map(statsItem => (
            <li
              className={css.item}
              key={statsItem.id}
              style={{
                backgroundColor: getRandomHexColor(),
              }}
            >
              <span className={css.label}>{statsItem.label}</span>
              <span className={css.percentage}>{statsItem.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
