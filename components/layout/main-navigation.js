import Link from 'next/link';
import Logo from './logo';
import classes from './main-navigation.module.css';

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href='/'>
        <Logo />
      </Link>
      <nav>
        <ul>
          <li className=''>
            <Link href='/posts'>Posts</Link>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header >
  )
}