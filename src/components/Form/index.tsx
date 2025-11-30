import styles from "./styles.module.css";
import { DefaultInput } from "../DefaultInput";

export function FormComponent() {
  return (
    <form action="" className={styles.form}>
      <div className={styles.formRow}>
        <DefaultInput id="task" type="text" />
      </div>
      <div className={styles.formRow}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
      <div className={styles.formRow}>
        <p>Ciclos.</p>
        <p>0 0 0 0 0 0 0</p>
      </div>
      <div className={styles.formRow}>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
}
