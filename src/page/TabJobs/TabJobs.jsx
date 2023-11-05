import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabJobs = () => {
  return (
    <div>
      <Tabs>
        <TabList className="text-center text-[#6C40B8] text-xl font-semibold hover:text-[#6C40B8]">
          <Tab>Web Development</Tab>
          <Tab>Digital Marketing</Tab>
          <Tab>Graphics Design</Tab>
        </TabList>

        <TabPanel>
          <h2>Web Development</h2>
        </TabPanel>
        <TabPanel>
          <h2>Digital Marketing</h2>
        </TabPanel>
        <TabPanel>
          <h2>Graphics Design</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabJobs;
