/**
 * Environment variables configuration
 */
export const env = {
  // App
  NODE_ENV: process.env.NODE_ENV || 'development',
  APP_PORT: parseInt(process.env.PORT || '3000', 10),
  APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',

  // Database
  DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost:27017/cleanarch',
  DB_NAME: process.env.DB_NAME || 'cleanarch',

  // JWT
  JWT_SECRET: process.env.JWT_SECRET || 'your-secret-key-change-in-production',
  JWT_EXPIRY: process.env.JWT_EXPIRY || '15m',

  // Logging
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  LOG_FORMAT: process.env.LOG_FORMAT || 'json',

  // CORS
  CORS_ORIGIN: process.env.CORS_ORIGIN || '*',

  // API
  API_VERSION: process.env.API_VERSION || 'v1',
  API_PREFIX: process.env.API_PREFIX || '/api',

  isDevelopment: () => env.NODE_ENV === 'development',
  isProduction: () => env.NODE_ENV === 'production',
  // Next.js NODE_ENV type includes "test" rather than "testing"
  isTesting: () => env.NODE_ENV === 'test',
};

// Validate required environment variables
const requiredEnvVars = ['DATABASE_URL', 'JWT_SECRET'];

if (env.isProduction()) {
  requiredEnvVars.forEach((envVar) => {
    if (!process.env[envVar]) {
      throw new Error(`Missing required environment variable: ${envVar}`);
    }
  });
}
