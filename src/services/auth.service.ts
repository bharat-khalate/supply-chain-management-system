export const authService = {
  login: async (email: string, password: string) => {
    // Dummy login endpoint behavior
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "admin@admin.com" && password === "mypcot@2025") {
          if (typeof document !== "undefined") {
            localStorage.setItem("token", "dummy-token-12345");
          }
          resolve({ token: "dummy-token-12345", user: { email, role: "admin" } });
        } else {
          reject(new Error("Invalid credentials. Try admin@example.com / password"));
        }
      }, 1000);
    });
  },
  forgotPassword: async (email: string) => {
    // Dummy forgot password endpoint behavior
    return new Promise((resolve) => {
      setTimeout(() => {
        const dummyToken = "abc123mockToken";
        const origin = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000';
        const resetUrl = `${origin}/reset-password?token=${dummyToken}`;
        console.log(` reset url ${resetUrl}`);
        resolve({ success: true, message: `Password reset link sent to ${email} if it exists.` });
      }, 1000);
    });
  },
  resetPassword: async (password: string, token?: string) => {
    // Dummy reset password endpoint behavior
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!token) return reject(new Error("Invalid or missing token"));
        resolve({ success: true, message: "Your password has been successfully reset." });
      }, 1000);
    });
  }
};
