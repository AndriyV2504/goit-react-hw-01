import FriendListItem from "./FriendListItem";
import styles from "./FriendListItem.module.css";

const FriendList = ({ friends }) => {
  return (
    <div className={styles.friendList}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </div>
  );
};

export default FriendList;
