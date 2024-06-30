import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  return new Promise((resolve, reject) => {
    Promise.all([uploadPhoto(), createUser()])
      .then((values) => {
        const [photo, user] = values;
        console.log(photo.body, user.firstName, user.lastName);
        resolve();
      })
      .catch((error) => {
        console.log('Signup system offline');
        reject(error);
      });
  });
}
