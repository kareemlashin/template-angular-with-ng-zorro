import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  decodeToken(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(atob(base64));
  }

  isTokenExpired(token: string) {
    const decodedToken = this.decodeToken(token);
    if (!decodedToken.exp) {
      return false;
    }
    const expirationDate = new Date(0);
    expirationDate.setUTCSeconds(decodedToken.exp);
    return expirationDate.valueOf() < new Date().valueOf();
  }

  getTokenPayload(token: string) {
    const decodedToken = this.decodeToken(token);
    return decodedToken;
  }
   getTokenExpirationDate(token: string) {
    const decodedToken = this.decodeToken(token);
    if (!decodedToken.exp) {
      return null;
    }
    const expirationDate = new Date(0);
    expirationDate.setUTCSeconds(decodedToken.exp);
    return expirationDate;
  }
   isTokenValid(token: string, publicKey: any) {
    if (this.isTokenExpired(token)) {
      return false;
    }
    try {
      const parts = token.split('.');
      const header = parts[0];
      const payload = parts[1];
      const signature = parts[2];
      const signatureInput = `${header}.${payload}`;
      const signatureBytes :any= crypto.subtle.sign('RSASSA-PKCS1-v1_5', publicKey, new TextEncoder().encode(signatureInput));
      const signatureBase64 = btoa(String.fromCharCode(...new Uint8Array(signatureBytes)));
      return signatureBase64 === signature;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
  getTokenType(token: string) {
    const decodedToken = this.decodeToken(token);
    if (decodedToken.typ) {
      return decodedToken.typ;
    }
    return null;
  }
  getTokenSubject(token: string) {
    const decodedToken = this.decodeToken(token);
    if (decodedToken.sub) {
      return decodedToken.sub;
    }
    return null;
  }





}
