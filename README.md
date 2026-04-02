export default function AnimatedHeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 animate-[fadeIn_1.2s_ease-in-out]">
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-cyan-300 text-sm border border-white/10 backdrop-blur-md">
            ✨ Modern React UI
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Build Beautiful
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
              React Interfaces
            </span>
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
            Create modern, aesthetic and responsive user interfaces with React JS,
            Tailwind CSS and smooth animations.
          </p>

          <div className="flex gap-4 pt-4">
            <button className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 text-white font-medium shadow-lg shadow-cyan-500/30 hover:scale-105">
              Get Started
            </button>

            <button className="px-6 py-3 rounded-2xl border border-white/20 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105">
              Explore More
            </button>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="w-[350px] h-[350px] rounded-[40px] bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl shadow-cyan-500/20 p-8 animate-[float_4s_ease-in-out_infinite]">
            <div className="h-full rounded-3xl bg-gradient-to-br from-cyan-500/20 to-pink-500/20 border border-white/10 p-6 flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-400 to-pink-500 flex items-center justify-center text-2xl text-white shadow-lg">
                  ⚛️
                </div>

                <h2 className="text-2xl font-bold text-white mt-6">
                  Animated Dashboard
                </h2>
                <p className="text-slate-300 mt-3 text-sm leading-relaxed">
                  Responsive cards, gradients, blur effects and modern layouts for your next React project.
                </p>
              </div>

              <div className="space-y-3 mt-6">
                <div className="h-3 rounded-full bg-cyan-400/60 w-[90%]"></div>
                <div className="h-3 rounded-full bg-pink-400/60 w-[70%]"></div>
                <div className="h-3 rounded-full bg-white/20 w-[50%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
