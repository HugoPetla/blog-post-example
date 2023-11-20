import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className={styles.profile}>
        <img src="https://avatars.githubusercontent.com/u/18637700?v=4" />
        <strong>Hugo Petla</strong>
        <span>@hugopetla</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size="1.25rem" />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
