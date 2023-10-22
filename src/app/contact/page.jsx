import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/Button/Button'

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
      <div className={styles.content}>
      <div className={styles.imgContainer}>
        <Image src='/contact.png' alt='contact image' fill className={styles.image} />
      </div>
      <form className={styles.form}>
        <input type="text" placeholder='name' className={styles.input} />
        <input type="text" placeholder='email' className={styles.input} />
       
     <textarea name="message" className={styles.textArea} id="" cols="20" rows="7" placeholder='your message'></textarea>
    <Button url='#' text="Send"/>
      </form>
      </div>

    </div>
  )
}
