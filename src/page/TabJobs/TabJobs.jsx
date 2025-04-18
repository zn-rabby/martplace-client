import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useJobs from "../../hooks/useJobs";
import CategoryCard from "../CategoryCard/CategoryCard";

const TabJobs = () => {
  const { data, isLoading } = useJobs();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-[#6C40B8] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-[#6C40B8] font-medium">Loading opportunities...</p>
        </div>
      </div>
    );
  }

  const categories = [
    {
      name: "Web Development",
      items: data.filter((item) => item.jobCategory === "Web Development"),
      icon: "💻",
      color: "from-[#6C40B8] to-[#9F7AEA]",
    },
    {
      name: "Digital Marketing",
      items: data.filter((item) => item.jobCategory === "Digital Marketing"),
      icon: "📈",
      color: "from-[#EF4741] to-[#FF8A65]",
    },
    {
      name: "Graphics Design",
      items: data.filter((item) => item.jobCategory === "Graphics Design"),
      icon: "🎨",
      color: "from-[#00C853] to-[#69F0AE]",
    },
  ];

  return (
    <div className="container mx-auto px-2 sm:px-3 lg:px-4 py-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-[#6C40B8] to-[#EF4741] bg-clip-text text-transparent">
            Explore Career Opportunities
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Browse through our curated job categories and find your perfect match
        </p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl  overflow-hidden border border-gray-100">
        <Tabs>
          <TabList className="flex flex-wrap justify-center gap-2 md:gap-4 p-4 bg-gray-50 border-b">
            {categories.map((category) => (
              <Tab
                key={category.name}
                className={`flex items-center px-5 py-3 text-sm md:text-base font-medium rounded-lg cursor-pointer transition-all duration-200
                  hover:shadow-md hover:scale-[1.02]
                  focus:outline-none focus:ring-2 focus:ring-[#6C40B8]/50
                  aria-selected:bg-gradient-to-r ${category.color} aria-selected:text-white aria-selected:shadow-md
                  border border-gray-200 aria-selected:border-transparent`}
              >
                <span className="mr-2 text-lg">{category.icon}</span>
                {category.name}
              </Tab>
            ))}
          </TabList>

          {categories.map((category) => (
            <TabPanel key={category.name} className="p-6 md:p-8">
              <div className="mb-6 flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {category.name} Jobs{" "}
                  <span className="text-gray-500">
                    ({category.items.length})
                  </span>
                </h3>
                <button className="text-[#6C40B8] hover:text-[#4D2D91] font-medium flex items-center">
                  View all
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <CategoryCard items={category.items} />
            </TabPanel>
          ))}
        </Tabs>
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <a href="/postedJobs">
          <button className="bg-gradient-to-r from-[#6C40B8] to-[#EF4741] text-white font-medium py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Browse All Categories
          </button>
        </a>
      </div>
    </div>
  );
};

export default TabJobs;
