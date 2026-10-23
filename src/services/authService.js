// src/services/authService.js

// ten plik zawiera funkcje związane z uwierzytelnianiem użytkownika, takie jak logowanie i rejestracja
// jak w przyszlosci dodamy fastapi to wysylamy tu dane do backendu i odbieramy odpowiedz
// narazie tylko program larpuje ze sprawdza dane zeby bledu nie wywalalo bo zprawdzalem czy dziala

export const authService = {
  login: async (credentials) => {
    //btw w credentials znajduje sie email i password wiec wystarczy je wyciagnac i zwalidowac
    console.log("Wysyłam dane do (przyszłego) FastAPI:", credentials);

    // symulacja opóźnienia odpowiedzi serwera
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      message: "Zalogowano pomyślnie (symulacja)",
      user: {
        email: credentials.email,
        token: "fake-jwt-token-12345",
      },
    };
  },
};
