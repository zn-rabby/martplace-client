import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import TabJobs from "../TabJobs/TabJobs";
import Subscribe from "../Subscribe/Subscribe";
import Work from "../Work/Work";

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Martplace | Home</title>
      </Helmet>

      {/* Banner Section */}
      <div className="">
        <Banner />
      </div>

      {/* TabJobs Section */}
      <div className="">
        <TabJobs />
      </div>

      {/* Work Section */}
      <div className="bg-white py-10 md:py-16">
        <Work />
      </div>

      {/* Subscribe Section */}
      <div className="bg-white py-10 md:py-16">
        <Subscribe />
      </div>
    </div>
  );
};

export default Home;
