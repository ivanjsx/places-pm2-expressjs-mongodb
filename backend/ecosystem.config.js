const dotenv = require('dotenv');

dotenv.config({ path: './.env.deploy' });

const {
  DEPLOY_USER,
  DEPLOY_HOST,
  DEPLOY_PATH,
  DEPLOY_REPO,
  DEPLOY_REF,
  DEPLOY_KEY,
  CLONE_KEY,
} = process.env;

module.exports = {
  apps: [
    {
      name: 'mesto-backend',
      script: 'dist/app.js',
    },
  ],
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      path: DEPLOY_PATH,
      repo: DEPLOY_REPO,
      ref: DEPLOY_REF,
      key: DEPLOY_KEY,
      'pre-deploy-local':
        `bash scripts/deployEnv.sh ${DEPLOY_USER}@${DEPLOY_HOST} ${DEPLOY_PATH}`,
      'post-deploy':
        `cd backend && pwd && npm ci && npm run build && GIT_SSH_COMMAND="ssh -i ${CLONE_KEY}" pm2 startOrRestart ecosystem.config.js --env production`,
    },
  },
};
