"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-4 animate-fade-in">
          <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin" />
          <p className="text-slate-500 font-medium">Laden...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    router.push("/login");
    return null;
  }

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/login");
  };

  return (
    <div className="min-h-screen">
      {/* Top Navigation Bar */}
      <nav className="border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-navy-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
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
              <span className="text-lg font-bold tracking-tight">
                Inburgering AI
              </span>
            </div>

            {/* User Menu */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium">{session.user?.name}</p>
                <p className="text-xs text-slate-500">
                  {session.user?.role} • {session.user?.subscriptionStatus}
                </p>
              </div>
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-white font-semibold text-sm">
                {session.user?.name?.charAt(0).toUpperCase() || "U"}
              </div>
              <button
                onClick={handleSignOut}
                className="btn btn-ghost text-sm"
                id="signout-button"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
                Uitloggen
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="animate-slide-up">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Welkom, {session.user?.name?.split(" ")[0]}! 👋
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Kies een examen om te beginnen met oefenen.
          </p>
        </div>

        {/* Exam Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {/* KNM Card */}
          <div className="auth-card p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-slide-up delay-100 cursor-pointer group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">KNM Examen</h3>
            <p className="text-slate-500 text-sm mb-4">
              Kennis van de Nederlandse Maatschappij — Meerkeuzevragen over Nederlandse samenleving.
            </p>
            <div className="flex items-center gap-2 text-xs text-orange-600 font-semibold">
              <span>Beginnen</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>

          {/* Taal A2 Card */}
          <div className="auth-card p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-slide-up delay-200 cursor-pointer group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Taal A2</h3>
            <p className="text-slate-500 text-sm mb-4">
              Lezen, Luisteren, Schrijven en Spreken — Niveau A2.
            </p>
            <div className="flex items-center gap-2 text-xs text-orange-600 font-semibold">
              <span>Beginnen</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>

          {/* Taal B1 Card */}
          <div className="auth-card p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-slide-up delay-300 cursor-pointer group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Taal B1</h3>
            <p className="text-slate-500 text-sm mb-4">
              Lezen, Luisteren, Schrijven en Spreken — Niveau B1.
            </p>
            <div className="flex items-center gap-2 text-xs text-orange-600 font-semibold">
              <span>Beginnen</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 animate-slide-up delay-400">
          <div className="glass rounded-xl p-5 text-center">
            <p className="text-3xl font-bold text-orange-500">0</p>
            <p className="text-sm text-slate-500 mt-1">Examens voltooid</p>
          </div>
          <div className="glass rounded-xl p-5 text-center">
            <p className="text-3xl font-bold text-blue-500">0</p>
            <p className="text-sm text-slate-500 mt-1">Vragen beantwoord</p>
          </div>
          <div className="glass rounded-xl p-5 text-center">
            <p className="text-3xl font-bold text-green-500">—</p>
            <p className="text-sm text-slate-500 mt-1">Gem. score</p>
          </div>
          <div className="glass rounded-xl p-5 text-center">
            <p className="text-3xl font-bold text-purple-500">FREE</p>
            <p className="text-sm text-slate-500 mt-1">Abonnement</p>
          </div>
        </div>
      </main>
    </div>
  );
}
