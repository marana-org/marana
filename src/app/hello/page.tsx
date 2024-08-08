import { Button } from "@nextui-org/react";
import styles from "./page.module.css";
import Link from "next/link";

const welcome = () => {
  return (
    <main className={styles.hero}>
      <h1 className={styles.heroText}>Marana</h1>
      <p>An LMS for the modern age</p>
      <div className={styles.heroButtonWrapper}>
        <Link href="https://itslevir.notion.site/The-Core-3ce62af357604be-b9b70197a1930b752?pvs=4">
          <Button
            className={styles.heroButton}
            variant="flat"
            disableRipple={true}
          >
            Read the Document
          </Button>
        </Link>

        <Link href="https://github.com/marana-org/marana">
          <Button
            className={styles.heroButton}
            variant="flat"
            disableRipple={true}
          >
            Check the Code
          </Button>
        </Link>
        <Link href="/beta/apply">
          <Button
            className={styles.heroButton}
            variant="flat"
            disableRipple={true}
          >
            Apply for Beta
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default welcome;
