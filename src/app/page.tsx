import Image from "next/image";
import styles from "./ui/home.module.css";

export default function Home() {
  return (
    <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black">
      <div className={styles.shape}></div>
    </div>
  );
}
