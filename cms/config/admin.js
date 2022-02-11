module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '449ef4ec88ca21b8ad23462c9a7b7301'),
  },
});
