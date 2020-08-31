import {secrets} from '../environments/secrets'

export const environment = {
  production: true,
  githubToken:secrets.github.accessToken
};
