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
      <Decoration>
        <h1>こんにちは</h1>
        <p>こんにちは</p>
      </Decoration>
    </main>
    <footer>FOOTER</footer>
    </>
  )
  return component
}


function Decoration({children}: {children: React.ReactNode}) {
  return (
    <div style={{ color: 'red'}}>
     {children}
    </div>
  )
}