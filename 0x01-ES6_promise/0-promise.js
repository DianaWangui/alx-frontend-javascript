export default function getResponseFromAPI() {
    return new Promise(function(resolve, reject) {
        if (true) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}