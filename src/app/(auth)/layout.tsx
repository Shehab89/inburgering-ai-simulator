import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inloggen",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Left Panel — Premium Branding */}
      <div className="hidden lg:flex lg:w-[52%] xl:w-[55%] relative auth-panel-bg">
        {/* Grid pattern */}
        <div className="auth-grid-pattern" />

        {/* Animated blobs */}
        <div className="auth-blob auth-blob-1" />
        <div className="auth-blob auth-blob-2" />
        <div className="auth-blob auth-blob-3" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-10 xl:p-14 w-full">
          {/* Brand Badge */}
          <div className="animate-fade-in">
            <div className="brand-badge">
              <div className="brand-icon">
                <svg
                  className="w-[18px] h-[18px] text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <span className="text-sm font-semibold text-white/90 tracking-wide">
                Inburgering AI
              </span>
            </div>
          </div>

          {/* Hero Content */}
          <div className="max-w-[440px] animate-slide-up">
            {/* Feature pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              <div className="feature-pill animate-fade-in delay-200">
                <span className="feature-pill-dot bg-orange-400" />
                AI-gestuurd
              </div>
              <div className="feature-pill animate-fade-in delay-300">
                <span className="feature-pill-dot bg-blue-400" />
                Direct feedback
              </div>
              <div className="feature-pill animate-fade-in delay-400">
                <span className="feature-pill-dot bg-green-400" />
                Examensimulatie
              </div>
            </div>

            <h1 className="text-[2.5rem] xl:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-5">
              Jouw pad naar{" "}
              <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-amber-300 bg-clip-text text-transparent">
                inburgering
              </span>{" "}
              begint hier.
            </h1>
            <p className="text-base xl:text-lg text-white/50 leading-relaxed max-w-[400px]">
              Oefen voor je examen met realistische AI-simulaties en ontvang
              persoonlijke feedback om je score te verbeteren.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3 mt-10">
              <div className="stat-card stat-card-orange animate-slide-up delay-300">
                <div className="text-2xl font-bold text-white mb-0.5">+50</div>
                <div className="text-xs text-white/40 font-medium uppercase tracking-wider">
                  Examens
                </div>
              </div>
              <div className="stat-card stat-card-blue animate-slide-up delay-400">
                <div className="text-2xl font-bold text-white mb-0.5">AI</div>
                <div className="text-xs text-white/40 font-medium uppercase tracking-wider">
                  Beoordeling
                </div>
              </div>
              <div className="stat-card stat-card-green animate-slide-up delay-500">
                <div className="text-2xl font-bold text-white mb-0.5">24/7</div>
                <div className="text-xs text-white/40 font-medium uppercase tracking-wider">
                  Beschikbaar
                </div>
              </div>
            </div>

            {/* Exam type indicators */}
            <div className="mt-8 space-y-3 animate-fade-in delay-700">
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-semibold text-white/80">KNM</span>
                  <span className="text-xs text-white/30 ml-2">Kennis van de Nederlandse Maatschappij</span>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-semibold text-white/80">Taal A2 & B1</span>
                  <span className="text-xs text-white/30 ml-2">Lezen · Luisteren · Schrijven · Spreken</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="animate-fade-in text-xs text-white/20 font-medium">
            © {new Date().getFullYear()} Inburgering AI Simulator
          </div>
        </div>
      </div>

      {/* Right Panel — Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-8 lg:p-12 bg-gradient-to-br from-slate-50 via-white to-orange-50/30 dark:from-navy-900 dark:to-navy-800 relative">
        {/* Subtle background accent */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-orange-100/40 to-transparent rounded-bl-full pointer-events-none dark:from-orange-900/10" />
        <div className="w-full max-w-[420px] relative z-10">{children}</div>
      </div>
    </div>
  );
}
