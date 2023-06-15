import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {
  private encryptionKey: any;

  constructor() {
    this.generateEncryptionKey();
  }

  private async generateEncryptionKey() {
    this.encryptionKey = await window.crypto.subtle.generateKey(
      { name: 'AES-GCM', length: 256 },
      true,
      ['encrypt', 'decrypt']
    );
  }

  private async encrypt(plaintext: any) {
    const encodedPlaintext = new TextEncoder().encode(JSON.stringify(plaintext));
    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const ciphertext = await window.crypto.subtle.encrypt(
      { name: 'AES-GCM', iv: iv },
      this.encryptionKey,
      encodedPlaintext
    );
    const encodedIv = Array.from(iv)
      .map((b) => ('00' + b.toString(16)).slice(-2))
      .join('');
    const encodedCiphertext = Array.from(new Uint8Array(ciphertext))
      .map((b) => ('00' + b.toString(16)).slice(-2))
      .join('');
    return `${encodedIv}:${encodedCiphertext}`;
  }

  private async decrypt(ciphertext: string) {
    const [encodedIv, encodedCiphertext]: any = ciphertext.split(':');
    const iv = new Uint8Array(
      encodedIv.match(/.{1,2}/g).map((byte: any) => parseInt(byte, 16))
    );
    const ciphertextBytes = new Uint8Array(
      encodedCiphertext.match(/.{1,2}/g).map((byte: any) => parseInt(byte, 16))
    );
    const plaintext = await window.crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: iv },
      this.encryptionKey,
      ciphertextBytes
    );
    return JSON.parse(new TextDecoder().decode(plaintext));
  }

  public async setEncryptedItem(key: string, value: any) {
    const ciphertext = await this.encrypt(value);
    localStorage.setItem(key, ciphertext);
  }

  public async getDecryptedItem(key: string) {
    const ciphertext = localStorage.getItem(key);
    if (ciphertext) {
      const plaintext = await this.decrypt(ciphertext);
      return plaintext;
    } else {
      return null;
    }
  }

  public async storeValue() {
    const key1 = 'my-secret-key1';
    const value1 = 'my secret value 1';
    await this.setEncryptedItem(key1, value1);

    const key2 = 'my-secret-key2';
    const value2 = 42;
    await this.setEncryptedItem(key2, value2);

    const key3 = 'my-secret-key3';
    const value3 = { name: 'John', age: 30 };
    await this.setEncryptedItem(key3, value3);

    const key4 = 'my-secret-key4';
    const value4 = [1, 2, 3];
    await this.setEncryptedItem(key4, value4);
  }

  public async retrieveValue() {
    const key1 = 'my-secret-key1';
    const decryptedValue1 = await this.getDecryptedItem(key1);
    console.log(decryptedValue1); // "my secret value 1"

    const key2 = 'my-secret-key2';
    const decryptedValue2 = await this.getDecryptedItem(key2);
    console.log(decryptedValue2); // 42

    const key3 = 'my-secret-key3';
    const decryptedValue3 = await this.getDecryptedItem(key3);
    console.log(decryptedValue3); // { name: 'John', age: 30 }

    const key4 = 'my-secret-key4';
    const decryptedValue4 = await this.getDecryptedItem(key4);
    console.log(decryptedValue4); // [1, 2, 3]
  }
}
