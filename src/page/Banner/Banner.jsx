import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Banner = () => {
  return (
    <div className="relative w-full h-[70vh] min-h-[500px]">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80)] 
        bg-no-repeat bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#186AE3]/90 to-[#100613]/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Find The Perfect Job That{" "}
              <span className="text-primary">Fits Your Life</span>
            </h1>

            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white bg-[#100613]/70 p-3 rounded-lg inline-block">
                We Offer <span className="text-primary">Thousands</span> of Job
                Vacancies Right Now
              </h2>
            </div>

            <button className="bg-primary hover:bg-[#1354c4] text-white text-lg font-semibold py-3 px-8 rounded-full flex items-center justify-center gap-2 mx-auto transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore Opportunities
              <MdKeyboardDoubleArrowRight className="text-xl animate-pulse" />
            </button>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  10K+
                </div>
                <div className="text-white text-sm">Jobs Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  5K+
                </div>
                <div className="text-white text-sm">Companies</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  50K+
                </div>
                <div className="text-white text-sm">Candidates</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  100+
                </div>
                <div className="text-white text-sm">Categories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
