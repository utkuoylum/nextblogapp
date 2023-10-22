import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>&copy; Next Blog 2023. All rights reserved.</div>
      <div className={styles.social}>
          <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Next Blog Facebook" />
          <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Next Blog Instagram" />
          <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Next Blog Twitter" />
          <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Next Blog Youtube" />
      </div>
    </div>
  );
}
