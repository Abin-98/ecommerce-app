import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <main className="flex flex-col sm:flex-row border border-gray-400">
      {/*Left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLER</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">Latest Arrivals</h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/*Right side */}
      <img
        src={assets.hero_img}
        alt="Shop the latest products"
        width={1200}        // actual pixel width of your hero image
        height={600}        // actual pixel height of your hero image
        fetchPriority="high"
        loading="eager"
        decoding="async"
        className="w-full sm:w-1/2"
      />
    </main>
  );
};

export default Hero;
