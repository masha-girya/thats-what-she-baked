import { HeaderDesktop } from './header-desktop';
import { HeaderMobile } from './header-mobile';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <HeaderDesktop />
        <HeaderMobile />
      </div>
    </header>
  );
};