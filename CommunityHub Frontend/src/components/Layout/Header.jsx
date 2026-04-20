function Header({ onLoginClick }) {
  return (
    <header className="header">
      <h1>🌐 CommunityHub</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">Posts</a>
        <a href="#">About</a>
      </nav>
      <button onClick={onLoginClick}>Login</button>
    </header>
  );
}
export default Header;