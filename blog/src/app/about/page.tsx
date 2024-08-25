import Hero from "@/components/hero"

// ブラウザやファイルの外部からアクセス可能にする変数や関数にはexportを使う
export default function Page() {
  return (
    <Hero 
      title="About Page" 
      subtitle="This is the about page"
      imageOn={false}
    />
  )
}
