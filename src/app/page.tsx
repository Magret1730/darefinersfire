import Image from "next/image";
import HeaderComponent from "./components/header.component";

export default function Home() {
  return (
    <>
    <HeaderComponent />
    <main className="mt-200 border">
      <div className="container">
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="description">
          Get started by editing <code>src/app/page.tsx</code>
        </p>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://nextjs.org/deployment"
            className="card"
          >
            <h2>Deployment &rarr;</h2>
            <p>Learn how to deploy your Next.js application to production.</p>
          </a>
        </div>
      </div>
    </main>
    </>
  );
}
