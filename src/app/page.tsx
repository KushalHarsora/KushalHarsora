import dynamic from "next/dynamic"

const Background = dynamic(() => import('@/app/components/Background'), {
  loading: () => <p>Loading...</p>
})

export default function Home() {
  return(
    <main className=" relative h-screen">
      <Background />
    </main>
  )
}