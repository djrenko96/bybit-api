import CryptoJS = require('crypto-js');

export class ByBit {
  constructor(apiKey: string, apiSecret: string) {
    this._apiKey = apiKey;
    this._apiSecret = apiSecret;
  }
  private _apiKey: string;
  private _apiSecret: string;

  /*private*/ async getSign(params: any): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      if (params.length === 0) reject('params.length === 0');
      if (this._apiSecret.length === 0) reject('apiSecret.length === 0');

      let orderedParams = "";
      Object.keys(params).sort().forEach(function (key) {
        orderedParams += key + "=" + params[key] + "&";
      });
      orderedParams = orderedParams.substring(0, orderedParams.length - 1);

      if (orderedParams.length === 0) reject('orderedParams.length === 0');

      resolve(CryptoJS.HmacSHA256(orderedParams, this._apiSecret).toString(CryptoJS.enc.Hex));
    });
  }



}