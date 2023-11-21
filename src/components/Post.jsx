import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://avatars.githubusercontent.com/u/18637700?v=4" />
          <div className={styles.authorInfo}>
            <strong>Hugo Petla</strong>
            <span>15 de março de 2021</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2023-11-17 11:05:43">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>Acabei de subir mais um projeto no meu portifa. É um</p>
        <p>
          projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto
          é
        </p>
        <p>
          DoctorCare 🚀 👉 <a href="#">jane.design/doctorcare</a>{" "}
        </p>
        <p>
          <a>#novoprojeto</a>
          <a>#nlw</a>
          <a>#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário"></textarea>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  );
}
