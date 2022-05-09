import React from "react";
import Button from "../../componet/Button";
import styles from "./news.module.css";
const Newsletter = () => {
   return (
      <section className={styles.container}>
         <div className={styles.wrapper}>
            <article className={styles.text_container}>
               <p>Newsletter</p>
               <h2>Subscribe to our Channel</h2>
               <p>And never miss our updates</p>
            </article>
            <article className={styles.image_container}>
               <input type="email" placeholder="Email Address" />
               <Button name={"Subscribe"} />
            </article>
         </div>
      </section>
   );
};

export default Newsletter;