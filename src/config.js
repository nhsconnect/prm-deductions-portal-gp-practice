const config = {
  NHSIdentityUrl: 'https://am.nhsspit-2.ptl.nhsd-esa.net/openam/oauth2/oidc',
  NHSIdentityClientId: '113012489833.apps.national',
  NHSIdentityUserInfo:'https://am.nhsspit-2.ptl.nhsd-esa.net/openam/oauth2/oidc/userinfo',
  NHSIdentityRedirectUri:'https://dev.patient-deductions.nhs.uk/auth',
  isLocal: process.env.PUBLIC_URL !== undefined && (process.env.PUBLIC_URL.includes("localhost") || process.env.PUBLIC_URL.includes("127.0.0.1"))
};

module.exports= config;