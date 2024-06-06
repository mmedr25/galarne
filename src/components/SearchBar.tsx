"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";


export const SearchBar = () => {
  const [value, setvalue] = useState("")

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    // Get a new searchParams string by merging the current
    // searchParams with a provided key/value pair
    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

  return (
      <div className="flex gap-2">
          <Input
              placeholder="search..."
              onChange={e => setvalue(e.currentTarget.value)}
          />
          <Button
              onClick={() => {
                  router.push(`${pathname}?${createQueryString("search", value)}`)
              }}
          >
              search
          </Button>
      </div>
  )
};
