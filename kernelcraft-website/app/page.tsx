import Image from "next/image";

export default function Home() {
  const startDate = new Date("2025-07-25");
  const today = new Date();
  const diffDays = Math.floor(
    (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
  );

  return (
    <div className="bg-gray-950 selection:bg-emerald-500/30 text-slate-300">
      {/* NAVBAR */}
      <nav className="bg-gray-950/80 backdrop-blur-md sticky top-0 z-50 border-b border-white/5 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/image_0505dd.png"
              alt="Logo"
              width={32}
              height={32}
              className="rounded-sm"
            />
            <span className="text-white font-bold text-lg tracking-tight">
              KernelCraft
            </span>
          </div>
          <div className="hidden sm:flex space-x-1">
            <a
              href="#"
              className="rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white"
            >
              Home
            </a>
            <a
              href="#about"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition"
            >
              About
            </a>
            <a
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition"
            >
              Servers
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main
        className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden border-b border-white/5
        bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] 
        bg-[size:32px_32px]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_50%,#064e3b,transparent)] opacity-40 pointer-events-none" />

        <div className="relative z-10">
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter">
            Welcome to{" "}
            <span className="text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">
              KernelCraft
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed uppercase tracking-widest font-light">
            An upcoming{" "}
            <strong className="text-white font-semibold">
              Minecraft Network
            </strong>
          </p>
          <div className="w-24 h-1 bg-emerald-500 mt-8 mb-12 rounded-full opacity-50 mx-auto" />

          <button className="bg-emerald-500 hover:bg-emerald-400 text-green-950 font-bold py-5 px-10 rounded-xl text-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
            JOIN THE NETWORK
          </button>
        </div>
      </main>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            {" "}
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              About the Project
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <a
                href="#"
                className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-xl hover:bg-white/10 hover:scale-105 active:scale-95 transition-all group"
              >
                <Image
                  src="/discord.png"
                  alt="Discord"
                  width={20}
                  height={20}
                />
                <span className="text-white font-medium text-sm">
                  Join our Discord
                </span>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-xl hover:bg-white/10 hover:scale-105 active:scale-95 transition-all group"
              >
                <Image
                  src="/youtube.png"
                  alt="Youtube"
                  width={20}
                  height={20}
                />
                <span className="text-white font-medium text-sm">
                  Follow us on Youtube
                </span>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-xl hover:bg-white/10 hover:scale-105 active:scale-95 transition-all group"
              >
                <Image src="/tiktok.png" alt="Tiktok" width={20} height={20} />
                <span className="text-white font-medium text-sm">
                  View our Tiktok
                </span>
              </a>
            </div>
            {/* UPTIME BADGE - Placed below links with its own space */}
            <div className="inline-flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-mono text-xs font-bold tracking-widest uppercase">
                SERVER LIFETIME: {diffDays} DAYS
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-colors">
              <h3 className="text-white font-bold text-xl mb-3 underline decoration-emerald-500/50 underline-offset-4">
                Built for Speed.
              </h3>
              <p className="text-slate-400 leading-relaxed">
                We run on multiple servers to ensure your gameplay is smooth and
                lag-free. No interruptions, just pure Minecraft.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-colors">
              <h3 className="text-white font-bold text-xl mb-3 underline decoration-emerald-500/50 underline-offset-4">
                Community Driven
              </h3>
              <p className="text-slate-400 leading-relaxed">
                We focus on a transparent, community-first experience. Every
                feature is designed to enhance gameplay while keeping the
                vanilla spirit of Minecraft alive.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-colors">
              <h3 className="text-white font-bold text-xl mb-3 underline decoration-emerald-500/50 underline-offset-4">
                Custom Experience
              </h3>
              <p className="text-slate-400 leading-relaxed">
                We develop custom made plugins to enhance and expand the vanilla
                Minecraft experience. From new game modes to QOL features, we
                are always learning and working to bring you the best experience
                possible.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-colors">
              <h3 className="text-white font-bold text-xl mb-3 underline decoration-emerald-500/50 underline-offset-4">
                Constantly Evolving
              </h3>
              <p className="text-slate-400 leading-relaxed">
                We are committed to continuous improvement. We listen to our
                community and regularly update our server with new features,
                optimizations, and bug fixes to ensure the best possible gaming
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-gray-950">
        <div className="max-w-7xl mx-auto py-12 px-4 text-center">
          <div className="text-gray-500 text-sm">
            &copy; {today.getFullYear()} KernelCraft Network. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
