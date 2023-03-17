import InputBase from '@mui/material/InputBase';
// import { SearchIcon } from 'lucide-react';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <div className=' bg-slate-700 text-slate-900 dark:text-slate-50 w-auto space-x-2' >
      <SearchIcon/>
      <InputBase
        placeholder='Search...'
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
}

export default Search;
