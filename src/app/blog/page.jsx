import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'

export default function Blog() {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testId" className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              src="https://images.pexels.com/photos/17986565/pexels-photo-17986565/free-photo-of-man-sitting-on-a-chair-on-a-beach-playing-his-guitar.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Item Title</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum magni quod perferendis? Ipsam natus harum eius in perspiciatis assumenda ullam laudantium mollitia! Minima recusandae odio quibusdam, amet excepturi quaerat!</p>
          </div>
        </Link>
        <Link href="/testID" className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              src="https://images.pexels.com/photos/17986565/pexels-photo-17986565/free-photo-of-man-sitting-on-a-chair-on-a-beach-playing-his-guitar.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Item Title</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum magni quod perferendis? Ipsam natus harum eius in perspiciatis assumenda ullam laudantium mollitia! Minima recusandae odio quibusdam, amet excepturi quaerat!</p>
          </div>
        </Link>
        <Link href="/testID" className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              src="https://images.pexels.com/photos/17986565/pexels-photo-17986565/free-photo-of-man-sitting-on-a-chair-on-a-beach-playing-his-guitar.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Item Title</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum magni quod perferendis? Ipsam natus harum eius in perspiciatis assumenda ullam laudantium mollitia! Minima recusandae odio quibusdam, amet excepturi quaerat!</p>
          </div>
        </Link>
        <Link href="/testID" className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              src="https://images.pexels.com/photos/17986565/pexels-photo-17986565/free-photo-of-man-sitting-on-a-chair-on-a-beach-playing-his-guitar.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Item Title</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum magni quod perferendis? Ipsam natus harum eius in perspiciatis assumenda ullam laudantium mollitia! Minima recusandae odio quibusdam, amet excepturi quaerat!</p>
          </div>
        </Link>
    </div>
  )
}
