import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return new Promise((resolve) => {
    Promise.all([uploadPhoto(), createUser()])
      .then((values) => {
        const [photo, user] = values;
        console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
        resolve();
      })
      .catch(() => {
        console.log('Signup system offline');
      });
  });
}
