# Generate s3 server config keys
## Introduction
<p>This is inteded to generating `policy key` for uploading images to AWS S3 without Secret Key. Most of the public packages are able to use with `Access Key ID` and `Secret Key`. That's why, if you don't want to use with `Secret Key` in the coding , you might use with `Signature` and `Policy` by using this package.</p>

## Config for this package
export const s3configs={ <br>
&emsp;&emsp;s3DirName:"dir_name", //option <br>
&emsp;&emsp;s3bucket:"<<bucket_name>>",<br>
&emsp;&emsp;s3UploadUrl:"https://s3-ap-southeast-1.amazonaws.com/<<bucket_name>>/",<br>
&emsp;&emsp;s3AccessKeyId:'enter_assess_key_id',<br>
&emsp;&emsp;secretAccessKey:'enter_secret_access_key'<br>
}

### In the /src/s3/Date.js file
`const defineDate=new Date('2030-12-31');//Add define data to alive`


## Get S3Policy 
## Steps
- npm install
- npm start
- file select
- see at the console


### Intend for another(Next) Process 
<div style="border:1px solid black; padding:4%;">
export const s3configs={ 
   <br> &emsp;&emsp;s3bucket:"<< bucket_name >>", <br/>
   &emsp;&emsp; s3UploadUrl:"https://s3-ap-southeast-1.amazonaws.com/<< bucket_name >>/", <br/>   
   &emsp;&emsp; s3key:"uploads/${user_id}/${filename}", <br/>
   &emsp;&emsp; s3AccessKeyId:"<< access_key_id >>", <br/>
   &emsp;&emsp; s3Signature:"<< signature_key >>", <br/>      
   &emsp;&emsp; s3Policy:"<< generated_by_this_package >>", <br/>
   &emsp;&emsp; xAmzDate:"20710101T000000000Z", <br/>
   &emsp;&emsp; dateYMD:"20710101" <br>
};
</div>

Dev : `Aung Kyaw Htwe`