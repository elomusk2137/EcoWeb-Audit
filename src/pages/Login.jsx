// src/pages/Login.jsx

import React, { useState } from "react";
import { authService } from "../services/authService";
import Button from "../components/Button"; // importowanie buttona z zrobionym style typekirk macie go w src/components/Button.jsx

export default function Login() {
  // Zmienne stanu do przechowywania wpisanych danych
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  // Obsługa wysłania formularza
  const handleSubmit = async (e) => {
    e.preventDefault(); // zeby strona sie nie odświeżała przy submit

    // obiekt danych on potem leci przez authService do backendu (w przyszłości)
    const loginData = {
      email: email,
      password: password,
    };

    setLoading(true);
    setMessage(null);

    try {
      // Wywołanie naszej "usługi"
      const response = await authService.login(loginData);

      console.log("Odpowiedź z serwera:", response);
      setMessage({ type: "success", text: "Zalogowano pomyślnie!" });

      // Tutaj w przyszłości zapiszesz token np. do localStorage lub przekierujesz na /dashboard
    } catch (error) {
      console.error("Błąd logowania:", error);
      setMessage({ type: "error", text: "Błąd logowania." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full space-y-8 bg-p p-8 bg-white rounded-xl shadow-md">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Zaloguj się do EcoCode Audit
          </h2>
        </div>

        {/* form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Adres Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Aktualizacja stanu przy pisaniu
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="twoj@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Hasło
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Aktualizacja stanu przy pisaniu
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* odpowiedz */}
          {message && (
            <div
              className={`p-3 text-sm rounded ${message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
            >
              {message.text}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
            >
              {loading ? "Logowanie..." : "Zaloguj się"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
