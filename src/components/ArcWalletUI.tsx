import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaDiscord,
  FaGithub,
  FaGlobe,
  FaXTwitter,
} from 'react-icons/fa6'


const assets = [
  { name: 'ARC', balance: 322, value: 125.75 },
  { name: 'USDC', balance: 150.21, value: 169.21 },
  { name: 'USD', balance: 131.20, value: 141.54 },
]

export default function ArcWalletUI() {
  const [activePage, setActivePage] = useState('home')

  const logo = '/Arc-Network-LOGO.png'

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.15),transparent_35%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.2),transparent_35%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
      <div className="w-16 h-16 rounded-2xl border border-cyan-400/20 bg-black/30 flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(0,255,255,0.12)]">
  <img
    src={logo}
    alt="Arc Logo"
    className="w-full h-full object-cover scale-[1.35]"
    onError={(e) => {
      e.currentTarget.style.display = 'none'
    }}
  />
</div>

            <p className="text-zinc-400 text-sm">
              The Ultimate Wallet Experience for the ARC Ecosystem
            </p>
          </div>

          <motion.button
  whileHover={{
    scale: 1.05,
    y: -2,
  }}
  whileTap={{
    scale: 0.95,
  }}
  onClick={() => setActivePage('wallets')}
  className="px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 font-semibold shadow-[0_0_30px_rgba(0,255,255,0.25)]"
>
  Connect Wallet
</motion.button>
        </div>

        {activePage === 'home' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                whileHover={{ y: -2 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
              >
                <p className="text-zinc-400 mb-2">Total Portfolio</p>

                <h2 className="text-5xl font-black">$441.12</h2>

                <div className="flex gap-3 mt-6 flex-wrap">
                  <motion.button
  whileHover={{
    scale: 1.08,
    y: -2,
  }}
  whileTap={{
    scale: 0.94,
  }}
  transition={{
    type: 'spring',
    stiffness: 300,
  }}
  onClick={() => setActivePage('send')}
  className="relative overflow-hidden rounded-2xl bg-cyan-500 px-5 py-3 font-semibold text-black shadow-[0_0_25px_rgba(0,255,255,0.35)] transition-all duration-300 hover:shadow-[0_0_45px_rgba(0,255,255,0.55)]"
>
  <span className="relative z-10">Send</span>

  <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 hover:opacity-100" />
</motion.button>

<motion.button
  whileHover={{
    scale: 1.08,
    y: -2,
  }}
  whileTap={{
    scale: 0.94,
  }}
  transition={{
    type: 'spring',
    stiffness: 300,
  }}
  onClick={() => setActivePage('receive')}
  className="relative overflow-hidden rounded-2xl bg-violet-600 px-5 py-3 font-semibold shadow-[0_0_25px_rgba(168,85,247,0.35)] transition-all duration-300 hover:shadow-[0_0_45px_rgba(168,85,247,0.55)]"
>
  <span className="relative z-10">Receive</span>

  <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 hover:opacity-100" />
</motion.button>

<motion.button
  whileHover={{
    scale: 1.08,
    y: -2,
  }}
  whileTap={{
    scale: 0.94,
  }}
  transition={{
    type: 'spring',
    stiffness: 300,
  }}
  onClick={() => setActivePage('swap')}
  className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-white/10 px-5 py-3 font-semibold shadow-[0_0_20px_rgba(0,255,255,0.15)] transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(0,255,255,0.25)]"
>
  <span className="relative z-10">Swap</span>

  <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />
</motion.button>
                </div>
              </motion.div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Assets</h3>

                  <button
                    onClick={() => setActivePage('assets')}
                    className="text-cyan-400"
                  >
                    View All
                  </button>
                </div>

                <div className="space-y-4">
                  {assets.map((asset) => (
                    <div
                      key={asset.name}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-5"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center font-bold">
                          {asset.name[0]}
                        </div>

                        <div>
                          <h4 className="font-bold">{asset.name}</h4>
                          <p className="text-zinc-400 text-sm">
                            {asset.balance}
                          </p>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="font-bold">${asset.value}</p>
                        <span className="text-green-400 text-sm">+6.8%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 h-fit">
              <h3 className="text-2xl font-bold mb-6">Quick Access</h3>

              <div className="grid grid-cols-2 gap-4">
                {['Stake', 'Bridge', 'NFTs', 'History'].map((item) => (
                  <button
                    key={item}
                    className="h-28 rounded-2xl border border-white/10 bg-black/30 font-semibold"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
                ) : activePage === 'send' ? (
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl border border-cyan-400/20 bg-white/5 p-8 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,255,255,0.08)]"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-4xl font-black text-cyan-300">
                  Send Assets
                </h2>

                <button
                  onClick={() => setActivePage('home')}
                  className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-400/20"
                >
                  Back
                </button>
              </div>

              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="Recipient Wallet Address"
                  className="w-full h-14 rounded-2xl border border-cyan-400/20 bg-black/30 px-4 outline-none focus:border-cyan-400"
                />

                <input
                  type="number"
                  placeholder="Amount to Send"
                  className="w-full h-14 rounded-2xl border border-cyan-400/20 bg-black/30 px-4 outline-none focus:border-cyan-400"
                />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full h-14 rounded-2xl bg-cyan-500 text-black font-bold shadow-[0_0_35px_rgba(0,255,255,0.35)]"
                >
                  Send Assets
                </motion.button>
              </div>
            </motion.div>
          </div>
        ) : activePage === 'receive' ? (
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-3xl border border-violet-400/20 bg-white/5 p-8 backdrop-blur-2xl shadow-[0_0_40px_rgba(168,85,247,0.08)]"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-4xl font-black text-violet-300">
                  Receive Assets
                </h2>

                <button
                  onClick={() => setActivePage('home')}
                  className="px-4 py-2 rounded-xl bg-violet-500/10 border border-violet-400/20"
                >
                  Back
                </button>
              </div>

              <div className="space-y-6">
                <div className="rounded-3xl border border-violet-400/20 bg-black/30 p-8 text-center">
                  <div className="mx-auto mb-5 flex h-44 w-44 items-center justify-center rounded-3xl border border-violet-400/20 bg-white/5 text-zinc-500">
                    QR CODE
                  </div>

                  <p className="text-zinc-400 text-sm">
                    0xA9F2...93FA
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full h-14 rounded-2xl bg-violet-600 font-bold shadow-[0_0_35px_rgba(168,85,247,0.35)]"
                >
                  Copy Address
                </motion.button>
              </div>
            </motion.div>
          </div>
        ) : activePage === 'swap' ? (
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, rotateX: 8 }}
              animate={{ opacity: 1, rotateX: 0 }}
              className="rounded-3xl border border-emerald-400/20 bg-white/5 p-8 backdrop-blur-2xl shadow-[0_0_40px_rgba(16,185,129,0.08)]"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-4xl font-black text-emerald-300">
                  Swap Assets
                </h2>

                <button
                  onClick={() => setActivePage('home')}
                  className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-400/20"
                >
                  Back
                </button>
              </div>

              <div className="space-y-5">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="mb-2 text-sm text-zinc-400">From</p>

                  <div className="flex items-center justify-between">
                    <span className="font-bold">ETH</span>
                    <span>1.25</span>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/20 bg-black/40">
                    ⇅
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="mb-2 text-sm text-zinc-400">To</p>

                  <div className="flex items-center justify-between">
                    <span className="font-bold">ARC</span>
                    <span>8420</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full h-14 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold shadow-[0_0_35px_rgba(16,185,129,0.35)]"
                >
                  Swap Assets
                </motion.button>
              </div>
            </motion.div>
          </div>
        ) : activePage === 'wallets' ? (
          <div className="max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-3xl border border-white/10 bg-black/60 backdrop-blur-2xl p-8 shadow-[0_0_50px_rgba(0,255,255,0.12)]"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-black">
                  Connect Wallet
                </h2>

                <button
                  onClick={() => setActivePage('home')}
                  className="px-4 py-2 rounded-xl bg-white/10"
                >
                  Close
                </button>
              </div>

              <div className="space-y-4">
                {[
  {
    name: 'Phantom',
    logo: 'https://seeklogo.com/images/P/phantom-wallet-logo-6E15F7F6D1-seeklogo.com.png',
  },
  {
    name: 'MetaMask',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg',
  },
  {
    name: 'Backpack',
    logo: 'https://backpack.app/favicon.ico',
  },
  {
    name: 'WalletConnect',
    logo: 'https://avatars.githubusercontent.com/u/37784886?s=200&v=4',
  },
].map((wallet) => (
                  <motion.button
                    key={wallet.name}
                    whileHover={{
                      scale: 1.02,
                      x: 4,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="w-full h-16 rounded-2xl border border-white/10 bg-white/5 px-5 flex items-center justify-between hover:border-cyan-400/30 hover:bg-cyan-500/5 transition-all"
                  >
                    <div className="flex items-center gap-4">
  <img
    src={wallet.logo}
    alt={wallet.name}
    className="w-10 h-10 rounded-xl object-cover bg-white"
  />

  <span className="font-semibold text-lg">
    {wallet.name}
  </span>
</div>

<span className="text-cyan-400 text-xl">
  →
</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        ) : null}
        
        
       <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
  <div>
    <p className="font-medium text-zinc-300">
      Built for the ARC ecosystem
    </p>

    <p className="text-xs text-zinc-500 mt-1">
      Arc Wallet Demo • Created by Rio
    </p>
  </div>

  <div className="flex items-center gap-5 text-lg">
    <a
      href="https://x.com/arc_blockchain"
      target="_blank"
      className="hover:text-cyan-400 transition"
    >
      <FaXTwitter />
    </a>

    <a
      href="https://discord.gg/"
      target="_blank"
      className="hover:text-cyan-400 transition"
    >
      <FaDiscord />
    </a>

    <a
      href="https://github.com/"
      target="_blank"
      className="hover:text-cyan-400 transition"
    >
      <FaGithub />
    </a>

    <a
      href="https://arc.net/"
      target="_blank"
      className="hover:text-cyan-400 transition"
    >
      <FaGlobe />
    </a>
  </div>
</div>
      </div>
    </div>
  )
}