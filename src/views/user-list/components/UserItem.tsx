import './style.css';

export interface UserItemProps {
  index: number;
  user: any;
}

const UserItem = ({index, user}: UserItemProps) => {

  return (
    <div className={index % 2 === 0 ? "item-user" : "item-user gray"}>
      <div className="id">
        {user.id}
      </div>
      <div>
        {user.name}
      </div>
      <div>
        {user.username}
      </div>
      <div>
        {user.email}
      </div>
      <div>
        {user.address?.street}
      </div>
      <div>
        {user.phone}
      </div>
      <div>
        {user.website}
      </div>
      <div>
        {user.company?.name}
      </div>
    </div>
  );
};

export default UserItem;