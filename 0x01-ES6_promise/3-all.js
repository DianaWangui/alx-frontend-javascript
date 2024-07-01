import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  return new Promise((resolve, reject) => {
    Promise.all([uploadPhoto(), createUser()])
      .then((values) => {
        const [photo, user] = values;
        console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
        resolve();
      })
      .catch(() => {
        reject(new Error('Signup system offline'));
        console.log('Signup system offline');
      });
  });
}
