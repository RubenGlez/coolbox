import { headerContainer, appName, avatar } from "./styles.module.scss";

export default function Header() {
  return (
    <header className={headerContainer}>
      <div>
        <span className={appName}>coolbox</span>
      </div>
      <div className={avatar}>
        <span>U</span>
      </div>
    </header>
  );
}
