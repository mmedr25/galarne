import { SearchBar } from "@/components/SearchBar";
import { getMorse } from "../lib/get-morse";

interface HomeProps {
  searchParams: {
    search: number
  }
}
export default async function Home({ searchParams }: HomeProps) {
  const { search } = searchParams

  const result = await getMorse(search)

    return (
      <main className="grid place-items-center h-screen">
        <div className="flex flex-col gap-4">
            <h1 className="text-center">this is morse code ....</h1>
            <SearchBar />
            <div className="p-4 border shadow-md rounded">
              <p>{result}</p>
            </div>
        </div>
      </main>
    )
}
