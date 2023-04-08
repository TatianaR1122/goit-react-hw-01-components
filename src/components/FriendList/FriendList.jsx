import styles from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
    return (
        <ul className={styles.friend_list}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                
                <FriendListItem 
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                    key={id}
                />
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number,
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool,
        })
    ).isRequired,

};

export default FriendList;