import { BiSolidUserAccount } from "react-icons/bi";
import { BsFillSendCheckFill, BsSearch } from "react-icons/bs";

const Work = () => {
  const steps = [
    {
      icon: <BiSolidUserAccount className="text-4xl text-[#6C40B8]" />,
      title: "Create an Account",
      description:
        "Sign up today to unlock exclusive benefits and access our premium services in just minutes.",
      color: "bg-[#6C40B8]/10",
    },
    {
      icon: <BsSearch className="text-4xl text-[#EF4741]" />,
      title: "Find Your Perfect Job",
      description:
        "Browse thousands of curated job listings tailored to your skills and preferences.",
      color: "bg-[#EF4741]/10",
    },
    {
      icon: <BsFillSendCheckFill className="text-4xl text-[#00C853]" />,
      title: "Apply with Confidence",
      description:
        "Submit your application with our one-click system and track your progress in real-time.",
      color: "bg-[#00C853]/10",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-[#6C40B8] to-[#EF4741] bg-clip-text text-transparent">
            Our Simple Process
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get started in just three easy steps to land your dream job
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`p-8 rounded-xl ${step.color} border border-transparent hover:border-[#6C40B8]/20 transition-all duration-300 hover:shadow-lg`}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white rounded-full shadow-md">
                {step.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold text-center text-gray-800 mb-3">
              {step.title}
            </h3>
            <p className="text-gray-600 text-center">{step.description}</p>
            <div className="flex justify-center mt-6">
              <span className="text-xs font-semibold px-3 py-1 bg-white rounded-full text-[#6C40B8] shadow-sm">
                Step {index + 1}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-[#6C40B8] to-[#EF4741] text-white font-medium py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          Get Started Now
        </button>
      </div>
    </div>
  );
};

export default Work;
