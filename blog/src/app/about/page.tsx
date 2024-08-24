// ブラウザやファイルの外部からアクセス可能にする変数や関数にはexportを使う
export default function Home() {
  const test = (
    <>
    <h1 style={{ color: 'orange',fontSize:'80px'}}>テスト</h1>
    <h1>テスト</h1>
    </>
  )
  return test
}