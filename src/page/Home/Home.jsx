import Banner from "../Banner/Banner";
import TabJobs from "../TabJobs/TabJobs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="my-10">
        <TabJobs></TabJobs>
      </div>
    </div>
  );
};

export default Home;
