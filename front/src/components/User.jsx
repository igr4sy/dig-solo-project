import UserItem from './UserItem';

function User({ user }) {
  return (
    <div className="user-info">
      <h2>ユーザー名：{user.name}</h2>
    </div>
  );
}

export default User;
