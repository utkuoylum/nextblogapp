import Image from 'next/image'
import styles from './page.module.css'

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store"}
  )
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Post({params}) {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            {`${data.body.substring(0,150)}...`}
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
