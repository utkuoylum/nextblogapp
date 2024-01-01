import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill
          alt="head photo"
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences with love
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1  className={styles.title}>Who are We?</h1>
          <p  className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            quaerat, corrupti nostrum quis saepe numquam quas esse fuga nisi
            molestias eius? Voluptatum sequi at ducimus corrupti ratione
            cupiditate commodi repudiandae. <br /> <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo est accusamus sit laboriosam voluptates aliquam amet numquam velit quod, magni veniam pariatur vitae necessitatibus temporibus adipisci quam corrupti rerum repellendus!
          </p>
        </div>
        <div className={styles.item}>
        <h1  className={styles.title}>What We Do?</h1>
        <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quas architecto quia adipisci dolore debitis nesciunt id facilis similique, iste sunt non ex voluptate voluptates aliquid assumenda dignissimos, temporibus culpa.</p>
      <br />
     -Dynamic Websites
     <br />
     -Fast and Handy
     <br />
     -Mobile Apps
      <Button url="/contact" text="contact"/>
        </div>
      </div>
    </div>
  );
}
