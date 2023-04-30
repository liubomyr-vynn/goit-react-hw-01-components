import css from './Friends.module.css';
import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <div className="container">
      <ul className={css.list}>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </div>
  );
};

FriendList.propType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
