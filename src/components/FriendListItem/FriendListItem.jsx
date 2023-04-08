import styles from "./FriendListItem.module.css"

import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
        <li key={id} className={styles.item}>
            <span className={isOnline ? styles.status_on : styles.status_off}></span>
            <img src={avatar} alt="User avatar" width="48" className={styles.avatar}/>
            <p className={styles.name}>{name}</p>
        </li>
    )
};

FriendListItem.propTypes = {
    
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        
    };

export default FriendListItem;