export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const myresponse = true;
    if (myresponse) {
      resolve('s');
    } else {
      reject(new Error('error'));
    }
  });
}
