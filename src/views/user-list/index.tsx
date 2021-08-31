import { useEffect, useState } from 'react';
import { api } from '../../services';
import UserItem from './components/UserItem';
import UserItemHeader from './components/UserItemHeader';
import './style.css'

const UserListPage = () => {

  const [userList, setUserList] = useState([])

  const loadUser = async () => {
    try {
      const res = await api.user.getAll();
      setUserList(res);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="user-list">
      <UserItemHeader />
      {userList.map((item, index) => {
        return (
          <UserItem
            key={index}
            index={index}
            user={item}
          />
        )
      })}
    </div>
  );
};

export default UserListPage;