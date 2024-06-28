import { useRouter } from "../../../node_modules/next/router"

export default function Test(){
  const {query} = useRouter()
  return(
    <h1>{JSON.stringify(query)}</h1>
  )
}