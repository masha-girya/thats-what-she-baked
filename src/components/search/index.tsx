import { SearchIcon } from "../icons/SearchIcon";
import styles from "./index.module.scss";

interface IProps {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
}

export const Search = (props: IProps) => {
  const { searchQuery, setSearchQuery } = props;

  return (
    <div className={styles.search}>
      <div className={styles.search__icon}>
        <SearchIcon />
      </div>
      <input
        type="text"
        className={styles.search__input}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="пошук рецепту"
      />
    </div>
  );
};
