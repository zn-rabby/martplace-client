import { useQuery } from "@tanstack/react-query";

const useJobs = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const data = await fetch("https://martplace-server.vercel.app/jobs");
      return await data.json();
    },
  });

  return { data, isLoading };
};

export default useJobs;
