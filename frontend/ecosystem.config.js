const dotenv = require('dotenv');

dotenv.config({ path: './.env.deploy' });

const {
  SSH_OPTIONS,
  DEPLOY_USER,
  DEPLOY_HOST,
  DEPLOY_PATH,
  DEPLOY_REPO,
  DEPLOY_REF,
} = process.env;

module.exports = {
  deploy: {
    production: {
      ssh_options: SSH_OPTIONS,
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      path: DEPLOY_PATH,
      repo: DEPLOY_REPO,
      ref: DEPLOY_REF,
      'post-deploy':
        'cd frontend && pwd && npm ci && npm run build',
    },
  },
};
