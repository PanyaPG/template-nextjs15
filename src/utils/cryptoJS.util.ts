import CryptoJS from "crypto-js";

const iv = CryptoJS.enc.Base64.parse("");

const SECRET_KEY_256 = CryptoJS.SHA256(
  process.env.NEXT_PUBLIC_CRYPTO_KEY as string
);

export const encryptData = (data: any) => {
  try {
    const encryptedString = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      SECRET_KEY_256,
      {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }
    ).toString();

    const urlEncodedData = encodeURIComponent(encryptedString);
    return urlEncodedData.toString();
  } catch (error) {
    console.log("🚀 ~ encryptData ~ error:", error);
  }
};

export const decryptData = (body: any) => {
  try {
    const decodedData = decodeURIComponent(body);

    const decrypted = CryptoJS.AES.decrypt(decodedData, SECRET_KEY_256, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });

    const convertString = decrypted.toString(CryptoJS.enc.Utf8);

    const dataDec = convertString ? JSON.parse(convertString) : "";
    return dataDec;
  } catch (error: any) {
    console.log("🚀 ~ decryptData ~ error:", error);
  }
};
