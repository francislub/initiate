export default function HeroSection() {
  return (
    <div className="w-full">
      <div className="relative bg-red-600 py-20 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden mb-8 md:mb-0">
            <img
              src="/initiate/chil1.jpg"
              alt="Students discussing"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-xl md:text-2xl mb-4">About us</h2>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Pioneers In Adolescent Sexual And Reproductive Health Communication In Uganda
            </h1>
            <p className="mb-8 text-sm md:text-base">
              Straight Talk Foundation (STF) is a leading Ugandan communication for development non-government
              organization that was registered in 1997 and operates nationally...
            </p>
            <button className="bg-white text-red-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
