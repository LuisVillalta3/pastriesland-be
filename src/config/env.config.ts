export interface EnvConfig {
  DB_HOST: string;
  DB_PORT: number;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_NAME: string;
  IS_PRODUCTION: boolean;
  DB_SYNC: boolean;
  JWT_SECRET_KEY: string;
  SALT_OR_ROUNDS: number;
}
