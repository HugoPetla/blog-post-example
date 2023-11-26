import { ThumbsUp, Trash } from "phosphor-react";

import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (content: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((old) => old + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        src="https://avatars.githubusercontent.com/u/18637700?v=4"
        hasBorder={false}
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Hugo Petla</strong>
              <time title="11 de Maio às 08:13h" dateTime="2023-11-17 11:05:43">
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp /> Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
