import Footer from "@/components/footer"
import Header from "@/components/header"
import Hero from "@/components/hero"

export default function Home() {
  const component = (
    <>
      <Header />
      <main>
        <Hero />
      </main>

      <Footer />
    </>
  )
  return component
}