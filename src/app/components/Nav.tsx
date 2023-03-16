import { getServerSession } from 'next-auth';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Nav = async () => {
  const session = await getServerSession();
  return (
    <div className='fixed backdrop-blur-sm bg-white/75'>
        <div className='container max-w-7xl mx-auto w-full flex justify-between items-center'>
          <Link href='/' className=''></Link>
            Transit app
        </div>
        <div className=''>
          <ThemeToggle />
        </div>
    </div>
  )
}

export default Nav;