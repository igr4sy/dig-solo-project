import UserItem from './UserItem';

function User({ user }) {
  return (
    <div className="card">
      <h2>{user.name} さん</h2>
      <UserItem />
    </div>
  );
}

export default User;
