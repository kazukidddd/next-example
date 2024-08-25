import Hero from "@/components/hero"

export default function Page() {
  const component = (
    <>
      <Hero 
        title="Root Page" 
        subtitle="This is the root page"
      />
    </>
  )
  return component
}