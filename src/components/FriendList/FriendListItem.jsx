import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusStyle = {
    color: isOnline ? "green" : "red",
  };

  return (
    <div className={styles.friendCard}>
      <img src={avatar} alt={`Avatar of ${name}`} width="48" />
      <p>{name}</p>
      <p style={statusStyle}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;
