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
      {/* Left Panel — Branding & Illustration */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-[55%] relative overflow-hidden auth-gradient-bg">
        {/* Decorative orbs */}
        <div className="auth-orb auth-orb-1" />
        <div className="auth-orb auth-orb-2" />
        <div className="auth-orb auth-orb-3" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-12 xl:p-16 w-full">
          {/* Logo */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Inburgering AI
              </span>
            </div>
          </div>

          {/* Hero Text */}
          <div className="max-w-lg animate-slide-up">
            <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight mb-6">
              Jouw pad naar{" "}
              <span className="bg-gradient-to-r from-orange-300 to-orange-400 bg-clip-text text-transparent">
                inburgering
              </span>{" "}
              begint hier.
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Oefen voor je KNM, A2 of B1 examen met AI-gestuurde simulaties.
              Ontvang directe feedback en verbeter je score.
            </p>

            {/* Stats / Trust Signals */}
            <div className="flex gap-8">
              <div className="glass-subtle rounded-xl px-5 py-4">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-slate-400">Oefenvragen</div>
              </div>
              <div className="glass-subtle rounded-xl px-5 py-4">
                <div className="text-2xl font-bold text-white">AI</div>
                <div className="text-sm text-slate-400">Feedback</div>
              </div>
              <div className="glass-subtle rounded-xl px-5 py-4">
                <div className="text-2xl font-bold text-white">KNM</div>
                <div className="text-sm text-slate-400">A2 & B1</div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="animate-fade-in text-sm text-slate-500">
            © {new Date().getFullYear()} Inburgering AI Simulator. Alle rechten
            voorbehouden.
          </div>
        </div>
      </div>

      {/* Right Panel — Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-8 lg:p-12 bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
