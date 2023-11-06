import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useJobs from "../../hooks/useJobs";
import CategoryCard from "../CategoryCard/CategoryCard";

const TabJobs = () => {
  const { data, isLoading } = useJobs();

  if (isLoading == true) {
    return (
      <div className="flex justify-center items-center h-[40vh]">
        <span className="loading loading-lg loading-spinner text-[#6C40B8]"></span>
      </div>
    );
  }

  const webDevelopment = data.filter(
    (item) => item.jobCategory == "Web Development"
  );
  const digitalMarketing = data.filter(
    (item) => item.jobCategory == "Digital Marketing"
  );
  const graphicsDesign = data.filter(
    (item) => item.jobCategory == "Graphics Design"
  );

  console.log(data);
  return (
    <div>
      <div className="text-center font-bold text-2xl md:text-4xl flex m-3">
        <svg
          viewBox="0 0 172 16"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="w-auto h-4 mx-auto text-gray-300 my-2"
        >
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)"
          ></line>
        </svg>
        <h2 className="bg-gradient-to-r from-primary to-[#EF4741] bg-clip-text text-transparent">
          Chose Your Jobs
        </h2>
        <svg
          viewBox="0 0 172 16"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="w-auto h-4 mx-auto text-gray-300 my-2"
        >
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)"
          ></line>{" "}
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)"
          ></line>
        </svg>
      </div>
      <Tabs>
        <TabList className="text-center text-[#6C40B8]  text-xl font-semibold hover:text-[#6C40B8] my-5">
          <Tab>Web Development</Tab>
          <Tab>Digital Marketing</Tab>
          <Tab>Graphics Design</Tab>
        </TabList>

        <TabPanel>
          <CategoryCard items={webDevelopment}></CategoryCard>
        </TabPanel>
        <TabPanel>
          <CategoryCard items={digitalMarketing}></CategoryCard>
        </TabPanel>
        <TabPanel>
          <CategoryCard items={graphicsDesign}></CategoryCard>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabJobs;
