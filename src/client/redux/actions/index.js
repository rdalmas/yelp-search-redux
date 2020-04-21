export const actions = {
  SEARCH_BUSINESS: "SEARCH_BUSINESS",
  LOADING: "LOADING",
  ERROR: "ERROR"
}

const baseUrl = process.env.RAZZLE_SERVER_HOST;

export const endpoints = {
  SEARCH_BUSINESS: `${baseUrl}/api/business/search`
}