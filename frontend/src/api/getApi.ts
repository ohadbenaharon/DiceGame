import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const endpoint = "http://localhost:8080/";

async function getApi() {
  return axios.get(endpoint, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export default function useGetApi() {
  return useQuery({
    queryKey: [`YOUR QUERY KEY`],
    queryFn: async () => await getApi().then((res) => res.data),
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
}
