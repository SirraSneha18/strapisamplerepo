export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://strapisamplegit-fke2bdfnfkayd5dd.canadacentral-01.azurewebsites.net/'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
