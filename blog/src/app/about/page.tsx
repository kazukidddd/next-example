import { EachPost } from "@/components/each_post"

// ブラウザやファイルの外部からアクセス可能にする変数や関数にはexportを使う
export default function About() {
  const propsww = { title: "asdf", url: "よう" }
  const component = (
    <>
    <header>HEADER</header>

    <main>
      <h1>CUBE</h1>
      <p>アウトプットしていくサイト</p>
      <EachPost title="asdf" url="よう" />
      <EachPost {...propsww} />
    </main>
    <footer>FOOTER</footer>
    </>
  )
  return component
}
