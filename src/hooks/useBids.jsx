import { useQuery } from "@tanstack/react-query";

const useBids = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["bids"],
    queryFn: async () => {
      const data = await fetch("http://localhost:5000/bids");
      return await data.json();
    },
  });

  return { data, isLoading };
};

export default useBids;
