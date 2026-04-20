function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <p>Posts: {user.postCount}</p>
    </div>
  );
}
export default UserProfile;