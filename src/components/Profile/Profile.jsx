import styles from "../Profile/Profile.module.css";

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={image} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span>1000</span>
        </li>
        <li>
          <span>Views</span>
          <span>2000</span>
        </li>
        <li>
          <span>Likes</span>
          <span>3000</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
