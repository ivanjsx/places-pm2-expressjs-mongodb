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
  apps: [
    {
      name: 'places-backend',
      script: 'dist/app.js',
    },
  ],
  deploy: {
    production: {
      ssh_options: SSH_OPTIONS,
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      path: DEPLOY_PATH,
      repo: DEPLOY_REPO,
      ref: DEPLOY_REF,
      'pre-deploy-local':
        `bash scripts/deployEnv.sh ${DEPLOY_USER}@${DEPLOY_HOST} ${DEPLOY_PATH}`,
      'post-deploy':
        'cd backend && pwd && npm ci && npm run build && pm2 startOrRestart ecosystem.config.js --env production',
    },
  },
};
