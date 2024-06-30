export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    try {
      if (promise) {
        resolve({ status: 200, body: 'success' });
      } else {
        reject(new Error());
      }
    } catch (error) {
      reject(new Error());
    } finally {
      console.log('Got a response from the API');
    }
  });
}
