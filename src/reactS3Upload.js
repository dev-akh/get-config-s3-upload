import S3 from './s3/react-aws-s3';
import {s3configs} from './config'

const config = {
    dirName:s3configs.s3DirName,
    bucketName: s3configs.s3bucket,
    region: "ap-southeast-1",
    accessKeyId: s3configs.s3AccessKeyId,
    secretAccessKey: s3configs.secretAccessKey,
    s3Url: s3configs.s3UploadUrl
}
 
const ReactS3Client = new S3(config);

export const UploadS3=(file,fileName)=>{
    ReactS3Client
    .uploadFile(file, fileName)
    .then(data => console.log(data))
    .catch(err => console.error(err));
}
