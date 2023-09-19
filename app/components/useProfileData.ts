"use client"
import useSWR from 'swr'

const FetchData = () => {
  const url = "https://5jjb3p8x.api.sanity.io/v2023-08-19/data/query/production?query=*%5B%5D"
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSWR(url, fetcher)
  return data[12]
}

export default FetchData