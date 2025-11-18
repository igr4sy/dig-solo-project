import UserItem from './UserItem';

function User({ user }) {
  return (
    <div className="user-info">
      <h2>{user.name} さん</h2>
      <UserItem />
    </div>
  );
}

export default User;
