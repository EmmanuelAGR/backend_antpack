import Gravatar from 'gravatar';
import md5 from 'md5';

/**
 * Get a user's gravatar via their email
 * @param {string} email E-mail of the gravatar 
 * @returns {string} gravatar
 */
const gravatar = (email: string): string => {
  const hashEmail = md5(email.trim().toLowerCase());
  const gravatar = Gravatar.url(hashEmail, { s: '1024' }, true);

  return gravatar;
};

export default gravatar;
