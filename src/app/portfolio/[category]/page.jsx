import Button from '@/components/Button/Button'
import styles from './page.module.css'
import Image from 'next/image'

export default function Category({params}) {
 
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
      <div className={styles.content}>
        <h1 className={styles.title}>Test</h1>
        <p className={styles.desc}>Desc</p>
        <Button text='See more' url='#'/>
      </div>
      <div className={styles.imgContainer}>
        <Image src='https://images.pexels.com/photos/3011842/pexels-photo-3011842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' fill className={styles.img} alt='falan'/>
      </div>
    </div>
    <div className={styles.item}>
      <div className={styles.content}>
        <h1 className={styles.title}>Test</h1>
        <p className={styles.desc}>Desc</p>
        <Button text='See more' url='#'/>
      </div>
      <div className={styles.imgContainer}>
        <Image src='https://images.pexels.com/photos/3011842/pexels-photo-3011842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' fill className={styles.img} alt='falan'/>
      </div>
    </div>
    <div className={styles.item}>
      <div className={styles.content}>
        <h1 className={styles.title}>Test</h1>
        <p className={styles.desc}>Desc</p>
        <Button text='See more' url='#'/>
      </div>
      <div className={styles.imgContainer}>
        <Image src='https://images.pexels.com/photos/3011842/pexels-photo-3011842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' fill className={styles.img} alt='falan'/>
      </div>
    </div>
    </div>
  )
}
