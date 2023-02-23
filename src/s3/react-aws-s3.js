import shortId from 'short-uuid';
import { dateYMD, xAmzDate,dateISOString } from "./Date";
import { throwError } from "./ErrorThrower";
import GetUrl from "./Url";
import {getPolicy} from "./Policy";
import {getSignature} from "./Signature"

class ReactS3Client {
  config;
  constructor(config) {
    this.config = config;
  }
  async uploadFile(file, newFileName){
    throwError(this.config, file);
    const fileExtension = file.type.split('/')[1];
    const fileName = `${newFileName || shortId.generate()}.${fileExtension}`;

    console.log("dateISOString:",dateISOString);
    console.log("Configuration : ",this.config);
    console.log("Selected date YMD : ",dateYMD);
    console.log("==========================START===============================");
    console.log("key :",`${this.config.dirName && this.config.dirName!="" ? this.config.dirName + "/" : ""}${fileName}`);
    console.log("acl :", "public-read");
    console.log("Content-Type :", file.type);
    console.log("x-amz-meta-uuid :", "14365123651274");
    console.log("x-amz-server-side-encryption :", "AES256");
    console.log("X-Amz-Date :",xAmzDate);
    console.log("X-Amz-Credential :",`${this.config.accessKeyId}/${dateYMD}/${this.config.region}/s3/aws4_request`);
    console.log("X-Amz-Algorithm :", "AWS4-HMAC-SHA256");
    console.log("Policy :", getPolicy(this.config));
    console.log("X-Amz-Signature :", getSignature(this.config, dateYMD, getPolicy(this.config)));
    console.log("==========================END================================")
    
    
    // const fd = new FormData();
    // const fileExtension = file.type.split('/')[1];
    // const fileName = `${newFileName || shortId.generate()}.${fileExtension}`;
    // const key = `${this.config.dirName ? this.config.dirName + "/" : ""}${fileName}`;
    // const url = GetUrl(this.config);
    // fd.append("key", key);
    // fd.append("acl", "public-read");
    // fd.append("Content-Type", file.type);
    // fd.append("x-amz-meta-uuid", "14365123651274");
    // fd.append("x-amz-server-side-encryption", "AES256");
    // fd.append(
    //     "X-Amz-Credential",
    //     `${this.config.accessKeyId}/${dateYMD}/${this.config.region}/s3/aws4_request`
    // );
    // fd.append("X-Amz-Algorithm", "AWS4-HMAC-SHA256");
    // fd.append("X-Amz-Date", xAmzDate);
    // fd.append("x-amz-meta-tag", "");
    // fd.append("Policy", getPolicy(this.config));
    // fd.append(
    //     "X-Amz-Signature",
    //     getSignature(this.config, dateYMD, getPolicy(this.config))
    // );
    // fd.append("file", file);
    
    // const data = await fetch(url, { method: "post", body: fd });
    // if (!data.ok) return Promise.reject(data);
    // return Promise.resolve({
    //   bucket: this.config.bucketName,
    //   key: `${this.config.dirName ? this.config.dirName + "/" : ""}${fileName}`,
    //   location: `${url}/${this.config.dirName ? this.config.dirName + "/" : ""}${fileName}`,
    //   status: data.status
    // });
  }
  async deleteFile(fileName) {
    const url = `https://${this.config.bucketName}.s3${
    this.config.region ? "-" + this.config.region : ""
  }.amazonaws.com/${
    this.config.dirName ? this.config.dirName + "/" : ""
  }${fileName}`;
  
  const deleteResult = await fetch(url, { method: "delete" });
  if (!deleteResult.ok) return Promise.reject(deleteResult);
  return Promise.resolve({
    ok: deleteResult.ok,
    status: deleteResult.status,
    message: "File Deleted",
    fileName: fileName
  });
}
}

export default ReactS3Client;
