import css from './Statistics.module.css';
import { getRandomHexColor } from 'Utils/RandomColor';

export const Statistics = ({ title, stats }) => {
  return (
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
  );
};
