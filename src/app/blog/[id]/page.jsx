import Image from 'next/image'
import styles from './page.module.css'

export default function Post() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Title Test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure laboriosam vero in voluptatum iste officia perferendis dolorum explicabo velit dolores facilis necessitatibus iusto, fugit totam voluptas minus incidunt mollitia sit?
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/18711906/pexels-photo-18711906/free-photo-of-cabo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="foto"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Username Test</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/18711906/pexels-photo-18711906/free-photo-of-cabo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque architecto quisquam quibusdam, vel voluptates illum delectus deserunt recusandae sit beatae maxime ducimus ratione suscipit autem quae veniam praesentium voluptate nesciunt!
        </p>
      </div>
    </div>
  )
}
