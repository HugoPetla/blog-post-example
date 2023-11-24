import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/HugoPetla.png",
      name: "Hugo Petla",
      role: "Frontend",
    },
    publishedAt: new Date("2023-11-21 17:27:27"),
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa. É um",
      },
      {
        type: "paragraph",
        content:
          "projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é",
      },
      { type: "paragraph", content: "DoctorCare 🚀 👉 " },
      { type: "link", content: "jane.design/doctorcare" },
      { type: "link", content: "#novoprojeto" },
      { type: "link", content: "#nlw" },
      { type: "link", content: "#rocketseat" },
    ],
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/rodrigobranas.png",
      name: "Rodrigo Branas",
      role: "CTO",
    },
    publishedAt: new Date("2023-11-01 17:27:27"),
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa. É um",
      },
      {
        type: "paragraph",
        content:
          "projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
