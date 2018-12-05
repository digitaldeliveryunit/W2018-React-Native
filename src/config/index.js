const environments = {
  dev: "https://dd-api-gateway.azure-api.net/w2018-azure-functions/",
  production: "",
  staging: "",
  qa: ""
};

export const USER_STATUS = {
  NEW: "NEW",
  JOINED: "JOINED",
  CHECKIN: "CHECKEDIN"
};

export default {
  apiUrl: environments.dev
};
