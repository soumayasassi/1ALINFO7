import { useSearchParams , Link } from "react-router-dom";
function Search() {
    const [searchParams, setSearchParams] = useSearchParams();

    // This function will be called whenever the text input changes
    const searchHandler = (event) => {
      let search;
      if (event.target.value) {
        search = {
          keyword: event.target.value
        }
      } else {
        search = undefined;
      }
  
      setSearchParams(search, { replace: true });
    }
  
    return( <div style={{ padding: 50 }}>
      <input
        value={searchParams.keyword}
        onChange={searchHandler}
        placeholder='Search...'
        style={{ width: '300px', padding: '8px 15px', fontSize: '16px' }}
      />
      <p>{searchParams}</p>
      {/* <Link to="/" reloadDocument={true}>Go Home</Link> */}
      <Link to="/" reloadDocument={true} >Go Home</Link>
    </div>)
}

export default Search;