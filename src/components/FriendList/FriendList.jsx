import styles from "./FriendList.module.css"

import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
    return (
        <ul className={styles.friend_list}>
            {friends.map((friend) => {
                const { avatar, name, isOnline, id } = friend;
                return (
                    <li key={id} className={styles.item}>
                    <span className={isOnline ? styles.status_on : styles.status_off}></span>
                    <img src={avatar} alt="User avatar" width="48" className={styles.avatar}/>
                    <p className={styles.name}>{name}</p>
                </li>
                );
            })}
            
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool,
        })
    ).isRequired,

};

export default FriendList;