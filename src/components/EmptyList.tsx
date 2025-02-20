import { Clipboard } from "@phosphor-icons/react";

import styles from "./EmptyList.module.css";

export function EmptyList() {
  return (
    <div className={styles.emptyList}>
      <Clipboard size={56} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}
