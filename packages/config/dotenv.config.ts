import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
const env = dotenv.config({ path: `${__dirname}/.env` });
export default dotenvExpand.expand(env);
