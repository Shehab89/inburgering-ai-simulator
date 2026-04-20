"use client";

import { useState, FormEvent } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const getPasswordStrength = (pw: string) => {
    if (pw.length === 0) return null;
    if (pw.length < 8) return "weak";
    const hasUpper = /[A-Z]/.test(pw);
    const hasNumber = /[0-9]/.test(pw);
    const hasSpecial = /[^A-Za-z0-9]/.test(pw);
    const score = [hasUpper, hasNumber, hasSpecial].filter(Boolean).length;
    if (score >= 2 && pw.length >= 10) return "strong";
    if (score >= 1) return "medium";
    return "weak";
  };

  const passwordStrength = getPasswordStrength(password);

  const strengthLabel: Record<string, string> = {
    weak: "Zwak",
    medium: "Gemiddeld",
    strong: "Sterk",
  };

  const strengthColor: Record<string, string> = {
    weak: "text-red-500",
    medium: "text-amber-500",
    strong: "text-emerald-500",
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Wachtwoorden komen niet overeen");
      return;
    }

    if (password.length < 8) {
      setError("Wachtwoord moet minimaal 8 tekens bevatten");
      return;
    }

    setIsLoading(true);

    try {
      const registerRes = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const registerData = await registerRes.json();

      if (!registerRes.ok) {
        setError(registerData.error || "Registratie mislukt");
        setIsLoading(false);
        return;
      }

      const signInResult = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (signInResult?.error) {
        router.push("/login");
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    } catch {
      setError("Er is een fout opgetreden. Probeer het later opnieuw.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="animate-slide-up">
      {/* Mobile Logo */}
      <div className="lg:hidden flex items-center gap-3 mb-10">
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
        <span className="text-lg font-bold tracking-tight">
          Inburgering AI
        </span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-[1.75rem] font-bold tracking-tight text-slate-900 dark:text-white mb-1.5">
          Account aanmaken
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-[0.9375rem]">
          Begin vandaag met oefenen voor je inburgeringsexamen
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="error-message mb-6" role="alert">
          <svg
            className="w-4 h-4 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
          <span>{error}</span>
        </div>
      )}

      {/* Register Form */}
      <form onSubmit={handleSubmit} className="space-y-4" id="register-form">
        <div>
          <label htmlFor="name" className="form-label">
            Volledige naam
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            placeholder="Jan de Vries"
            disabled={isLoading}
          />
        </div>

        <div>
          <label htmlFor="email" className="form-label">
            E-mailadres
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            placeholder="naam@voorbeeld.nl"
            disabled={isLoading}
          />
        </div>

        <div>
          <label htmlFor="password" className="form-label">
            Wachtwoord
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input pr-11"
              placeholder="Minimaal 8 tekens"
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              tabIndex={-1}
              aria-label={
                showPassword ? "Verberg wachtwoord" : "Toon wachtwoord"
              }
            >
              {showPassword ? (
                <svg
                  className="w-[18px] h-[18px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  className="w-[18px] h-[18px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Password Strength Meter */}
          {password.length > 0 && passwordStrength && (
            <div className="mt-2 space-y-1 animate-fade-in">
              <div className="strength-meter">
                <div
                  className={`strength-meter-fill strength-${passwordStrength}`}
                />
              </div>
              <p
                className={`text-[11px] font-semibold ${strengthColor[passwordStrength]}`}
              >
                {strengthLabel[passwordStrength]}
              </p>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="form-label">
            Bevestig wachtwoord
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`form-input ${
              confirmPassword.length > 0 && password !== confirmPassword
                ? "error"
                : ""
            }`}
            placeholder="Herhaal je wachtwoord"
            disabled={isLoading}
          />
          {confirmPassword.length > 0 && password !== confirmPassword && (
            <p className="text-[11px] text-red-500 font-medium mt-1 animate-fade-in">
              Wachtwoorden komen niet overeen
            </p>
          )}
        </div>

        <div className="pt-1">
          <button
            type="submit"
            disabled={
              isLoading ||
              (confirmPassword.length > 0 && password !== confirmPassword)
            }
            className="btn btn-primary btn-full"
            id="register-submit"
          >
            {isLoading ? (
              <>
                <div className="spinner" />
                Account aanmaken...
              </>
            ) : (
              "Account aanmaken"
            )}
          </button>
        </div>
      </form>

      {/* Terms */}
      <p className="mt-4 text-[11px] text-center text-slate-400 leading-relaxed">
        Door een account aan te maken, ga je akkoord met onze{" "}
        <span className="auth-link text-[11px]">Voorwaarden</span> en{" "}
        <span className="auth-link text-[11px]">Privacybeleid</span>.
      </p>

      {/* Divider */}
      <div className="auth-divider">
        <div className="flex justify-center">
          <span className="bg-white dark:bg-navy-900 px-4 text-xs text-slate-400 font-medium relative z-10 uppercase tracking-wider">
            of
          </span>
        </div>
      </div>

      {/* Login Link */}
      <Link
        href="/login"
        className="btn btn-secondary btn-full"
        id="login-link"
      >
        Inloggen met bestaand account
      </Link>
    </div>
  );
}
