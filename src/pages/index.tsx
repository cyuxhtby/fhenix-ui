import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="pt-4 sm:pt-8 space-y-3 text-white text-4xl flex flex-col items-center justify-center px-4 sm:px-8">
      <h1 className="text-5xl sm:text-6xl font-bold">Fhenix Utility dApp</h1>
      <p className="text-2xl sm:text-3xl text-center">Unlock end-to-end encryption</p>
    </div>
  );
};

export default Home;
