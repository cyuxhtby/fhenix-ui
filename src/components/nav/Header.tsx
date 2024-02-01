import Link from 'next/link';

import { WalletControlBar } from '../../features/wallet/WalletControlBar';

export function Header() {
  return (
    <header className="px-4 sm:px-8 lg:px-16 pt-4 pb-4 w-full bg-gray-800 text-white">
      <div className="flex items-center justify-between">
        <Link href="/" className="py-2 flex items-center space-x-4">
          <p className="text-lg font-bold">Home</p>
        </Link>
        <Link href="/bridge" className="py-2 flex items-center space-x-4">
          <p className="text-lg font-bold">Bridge</p>
        </Link>
        <Link href="/mint" className="py-2 flex items-center space-x-4">
          <p className="text-lg font-bold">Mint</p>
        </Link>
        <Link href="/swap" className="py-2 flex items-center space-x-4">
          <p className="text-lg font-bold">Swap</p>
        </Link>
        <div className="flex flex-col items-end md:flex-row-reverse md:items-center gap-4">
          <WalletControlBar />
        </div>
      </div>
    </header>
  );
}
