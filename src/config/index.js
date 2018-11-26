const environments = {
  dev: "https://myevent.azurewebsites.net/api/",
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
