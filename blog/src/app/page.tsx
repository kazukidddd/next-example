import Hero from "@/components/hero"
import Layout from "@/components/layout"

export default function Home() {
  const component = (
    <>
      <Layout>
        <Hero />
      </Layout>
    </>
  )
  return component
}