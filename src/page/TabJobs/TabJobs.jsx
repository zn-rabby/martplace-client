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
      <Tabs>
        <TabList className="text-center text-[#6C40B8] text-xl font-semibold hover:text-[#6C40B8] my-5">
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
