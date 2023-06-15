import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Base64UtilService {

  constructor() { }
  decodeBase64(base64String:any) {
    const decodedString = atob(base64String);
    return decodedString;
  }
  encodeBase64(string:any) {
    const base64String = btoa(string);
    return base64String;
  }
  convertFilesToBase64(files:any=[]) {
    const filePromises = [];
  
    for (const file of files) {
      const fileReader:any = new FileReader();
      const filePromise = new Promise((resolve, reject) => {
        fileReader.onload = () => {
          const base64String = fileReader.result.split(',')[1];
          resolve(base64String);
        };
        fileReader.onerror = () => {
          reject(new Error('Failed to read file.'));
        };
      });
      fileReader.readAsDataURL(file);
      filePromises.push(filePromise);
    }
  
    return Promise.all(filePromises);
  }

   convertFileToBase64(file:File) {
    return new Promise((resolve, reject) => {
      const fileReader:any = new FileReader();
      fileReader.onload = () => {
        const base64String = fileReader.result.split(',')[1];
        resolve(base64String);
      };
      fileReader.onerror = () => {
        reject(new Error('Failed to read file.'));
      };
      fileReader.readAsDataURL(file);
    });
  }
  
   convertToBase64(files:any) {
    const filePromises = files.map((file:any) => {
      return this.convertFileToBase64(file);
    });
    return Promise.all(filePromises);
  }
}
