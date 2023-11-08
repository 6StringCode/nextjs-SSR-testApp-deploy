import Image from 'next/image';
import classes from './hero.module.css';

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/profilepic.png" alt='An image showing Adam' width={300} height={300}></Image>
      </div>
      <h1>Hi I'm Adam</h1>
      <p>I used to perform on Broadway and tour the world playing guitar for Grammy and Tony Award-winning projects. This is my blog about how I pivoted into the world of web developement</p>
    </section>
  )
}