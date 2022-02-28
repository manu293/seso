export const stringToBase64 = (string) => {
    let bufferData = new Buffer(string);
    return bufferData.toString('base64');
}