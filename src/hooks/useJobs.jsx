import { useQuery } from "@tanstack/react-query";

const useJobs = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const data = await fetch("http://localhost:5000/jobs");
      return await data.json();
    },
  });

  return { data, isLoading };
};

export default useJobs;
