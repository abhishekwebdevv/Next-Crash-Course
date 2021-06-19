import headerStyles from '../styles/Header.module.css';

function Header() {
  return (
    <div className={headerStyles.title}>
      <h2>
        <span>WebDev</span>News
      </h2>
      <p className={headerStyles.description}>
        Keep up to date with the latest Web Dev news from around the world.
      </p>
    </div>
  );
}

export default Header;
