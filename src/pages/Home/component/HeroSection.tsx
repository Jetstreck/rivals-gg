export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/assets/images/hero-bg.png)',
          backgroundSize: '60% auto',
          backgroundPosition: 'center center'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/90"></div>
        {/* Additional gradient overlay for orange accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-orange-600/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
          {/* Left: Main Content */}
          <div className="text-center lg:text-left">
            <h1 className="mb-4 text-4xl font-bold leading-tight text-white drop-shadow-2xl md:mb-5 md:text-5xl lg:mb-6 lg:text-6xl xl:text-7xl">
              Track Your{" "}
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                Gameplay
              </span>
              <br />
              Like a Pro
            </h1>

            <p className="mb-3 text-lg text-white/90 md:mb-4 md:text-xl lg:text-2xl">
              Your Ultimate Gaming Tracker
            </p>

            <p className="mb-6 text-sm text-white/80 md:mb-8 md:text-base lg:text-lg">
              Monitor your performance, analyze your stats, and dominate the competition. 
              Track every match, every kill, and every victory with precision.
            </p>

            {/* CTA Buttons */}
            {/* <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4 lg:items-start">
              <button className="group relative w-full overflow-hidden rounded-full bg-white px-8 py-4 text-base font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 sm:w-auto">
                <span className="relative z-10 text-gray-900 transition-colors duration-300 group-hover:text-white">
                  Start Tracking
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </button>

              <button className="w-full rounded-full border-2 border-white/40 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/20 hover:scale-105 active:scale-95 sm:w-auto">
                View Stats
              </button>
            </div> */}
          </div>

          {/* Right: Stats Cards - Gaming Tracker Focus */}
          <div className="mx-auto grid w-full max-w-xs grid-cols-1 gap-3 sm:max-w-none sm:grid-cols-2 lg:mx-0 lg:max-w-xs lg:grid-cols-1">
            {/* Performance Card */}
            <div className="group rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur-md transition-all hover:border-orange-400/50 hover:bg-white/15 hover:shadow-xl sm:p-5">
              <div className="mb-3 flex items-center justify-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/80">Performance</span>
                <div className="h-2 w-2 rounded-full bg-green-400"></div>
              </div>
              <div className="mb-2 text-2xl font-bold leading-tight text-orange-400 sm:text-3xl">98.5%</div>
              <div className="text-xs font-medium leading-relaxed text-white/70">Win Rate This Month</div>
            </div>

            {/* Matches Tracked Card */}
            <div className="group rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur-md transition-all hover:border-orange-400/50 hover:bg-white/15 hover:shadow-xl sm:p-5">
              <div className="mb-3 flex items-center justify-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/80">Matches</span>
                <div className="h-2 w-2 rounded-full bg-blue-400"></div>
              </div>
              <div className="mb-2 text-2xl font-bold leading-tight text-orange-400 sm:text-3xl">2,847</div>
              <div className="text-xs font-medium leading-relaxed text-white/70">Total Matches Tracked</div>
            </div>

            {/* K/D Ratio Card */}
            <div className="group rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur-md transition-all hover:border-orange-400/50 hover:bg-white/15 hover:shadow-xl sm:col-span-2 sm:p-5 lg:col-span-1">
              <div className="mb-3 flex items-center justify-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/80">K/D Ratio</span>
                <div className="h-2 w-2 rounded-full bg-purple-400"></div>
              </div>
              <div className="mb-2 text-2xl font-bold leading-tight text-orange-400 sm:text-3xl">3.24</div>
              <div className="text-xs font-medium leading-relaxed text-white/70">Average Kill/Death Ratio</div>
            </div>
          </div>
        </div>

        {/* Bottom: Quick Stats Bar */}
        {/* <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 md:mt-12 lg:gap-4 mt-16">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm md:p-5">
            <div className="mb-1.5 text-2xl font-bold leading-none text-orange-400 md:text-3xl">10K+</div>
            <div className="text-xs font-medium text-white/70 uppercase tracking-wide">Active Users</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm md:p-5">
            <div className="mb-1.5 text-2xl font-bold leading-none text-orange-400 md:text-3xl">500+</div>
            <div className="text-xs font-medium text-white/70 uppercase tracking-wide">Games Tracked</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm md:p-5">
            <div className="mb-1.5 text-2xl font-bold leading-none text-orange-400 md:text-3xl">1M+</div>
            <div className="text-xs font-medium text-white/70 uppercase tracking-wide">Data Points</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm md:p-5">
            <div className="mb-1.5 text-2xl font-bold leading-none text-orange-400 md:text-3xl">24/7</div>
            <div className="text-xs font-medium text-white/70 uppercase tracking-wide">Live Tracking</div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

