import Image from "next/image";

const Home = () => {
  return (
    <div className="flex gap-20">
      <div className="flex-1 flex flex-col gap-12">
        <h1 className="text-8xl md:text-5xl">Creative Thoughts Agency.</h1>
        <p className="text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className="flex gap-5 justify-start ">
          <button className="py-5 px-4 min-w-[120px] cursor-pointer border-none rounded-md bg-blue-500 text-white">
            Learn More
          </button>
          <button className="py-5 px-4 min-w-[120px] cursor-pointer border-none rounded-md bg-blue-500 text-white">
            Contact
          </button>
        </div>
        <div className="relative w-[500px] h-12 md:w-full filter grayscale">
          <Image src="/brands.png" alt="" width={500} height={500}/>
        </div>
    
      </div>
      <div className="flex-1 relative">
        <Image src="/hero.gif" alt="" width={500} height={500}/>
      </div>
    </div>
  );
};

export default Home;
