import InputBase from '@mui/material/InputBase';
import { LucideSearch } from 'lucide-react';

const Search = () => {
  return (
    <div className='w-full mx-2 relative rounded-full bg-white/50 flex justify-center align-middle items-center'> <div className='pointer-events-none px-2'>
        <LucideSearch />
      </div>
      <InputBase
        className='w-full dark:text-slate-50'
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
}

export default Search;
