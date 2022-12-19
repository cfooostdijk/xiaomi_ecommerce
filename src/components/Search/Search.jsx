import styles from './styles/Search.module.scss';

const Search = () => {
	return (
		<form className={styles.search} action="">
			<input type="search" placeholder="Search gear & apparel..." required />
			<button type="submit">Search</button>
		</form>   
	)
}

export default Search;

