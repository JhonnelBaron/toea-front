// utils/constants.js
export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://brown-cassowary-860004.hostingersite.com/api/storage'
    : 'http://localhost:8000/storage';
