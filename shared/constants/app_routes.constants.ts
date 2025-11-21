export const APP_ROUTES = {
  HOME: '/',
  BONUS: '/bonus',
  APP: '/app',
  LOGIN: '/login',
  CASINO: (offerId: number) => `/casino/${offerId}`,
} as const;
