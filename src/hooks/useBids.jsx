import { useQuery } from "@tanstack/react-query";

const useBids = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["bids"],
    queryFn: async () => {
      const data = await fetch("https://martplace-server.vercel.app/bids");
      return await data.json();
    },
  });

  return { data, isLoading };
};

export default useBids;
