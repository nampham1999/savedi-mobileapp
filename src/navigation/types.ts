export type AuthStackParams = {
  Login: undefined;
  Otp: undefined;
};

export type AppStackParams = {
  Tab: undefined;
  Home: undefined;
};

export type AppTabParams = {
  Home: undefined;
};

export type AppRootParams = AuthStackParams & AppStackParams & AppTabParams;
