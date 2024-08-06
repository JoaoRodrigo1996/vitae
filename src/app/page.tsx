import { Header } from "@/components/header"
import { createClient } from "@/utils/supabase/server"

export default async function Home() {
  const supabase = createClient()
  const { data, error, status } = await supabase.from('project').select()

  return (
    <>
      <Header />
    </>
  )
}
