import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Banner = () => {
  return (
    <div className="relative w-full h-screen min-h-[600px] max-h-[800px]">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80)] 
          bg-no-repeat bg-cover bg-center w-full h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#186AE3]/80 via-[#186AE3]/70 to-[#100613]/90"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center w-full">
        <div className="w-full px-4 md:px-8 lg:px-16 xl:px-20">
          <div className="max-w-7xl mx-auto text-center">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              Discover Your <span className="text-[#FFD700]">Dream Career</span>{" "}
              Today
            </h1>

            {/* Subheading */}
            <div className="mb-8 lg:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-[#186AE3]/40 to-[#100613]/60 backdrop-blur-sm border border-white/10">
                <span className="text-[#FFD700]">10,000+</span> Jobs Waiting For
                You
              </h2>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <a href="/postedJobs">
                <button className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FF8C00] text-[#100613] text-lg md:text-xl font-bold py-4 px-10 rounded-full flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Browse Jobs Now
                  <MdKeyboardDoubleArrowRight className="text-2xl animate-bounce-horizontal" />
                </button>
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                {
                  value: "10K+",
                  label: "Jobs Available",
                  color: "text-[#FFD700]",
                },
                { value: "5K+", label: "Companies", color: "text-[#4DE680]" },
                { value: "50K+", label: "Candidates", color: "text-[#FF7E7E]" },
                { value: "100+", label: "Categories", color: "text-[#7E7EFF]" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div
                    className={`text-3xl md:text-4xl font-bold ${stat.color} mb-1`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/90 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Banner;
