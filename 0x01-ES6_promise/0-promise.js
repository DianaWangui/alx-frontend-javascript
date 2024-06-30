export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        const myresponse = true;
        if (myresponse) {
            resolve();
        } else {
            reject();
        }
        
    });
}
