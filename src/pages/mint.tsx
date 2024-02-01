import type { NextPage } from 'next';

import { MintTokenCard } from '../features/mint/MintTokenCard';

const Home: NextPage = () => {
  return (
    <div className="pt-4 sm:pt-8 space-y-3 text-white text-4xl flex flex-col items-center justify-center px-4 sm:px-8">
      <h1 className="text-5xl sm:text-6xl font-bold"></h1>
      <p className="text-2xl sm:text-3xl text-center">
        Deposit bridged assets and mint encrypted tokens
      </p>
      <MintTokenCard />
    </div>
  );
};

export default Home;
