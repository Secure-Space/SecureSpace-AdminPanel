import React, { useState, useEffect } from "react";
import AWS from "aws-sdk";

import "./Faces.scss";

import SideBar from "../../components/SideBar/SideBar";

const Faces = () => {
  const [imageUrls, setImageUrls] = useState(' ');

  async function getDataUrl(blob) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }

  useEffect(() => {
    async function getImageUrls() {
      try {
        const s3 = new AWS.S3();
        const objects = await s3
          .listObjects({ Bucket: "testingrekognition1234" })
          .promise();
        const keys = objects.Contents.map((object) => object.Key);
        const urls = await Promise.all(
          keys.map(async (key) => {
            const imageData = await s3
              .getObject({ Bucket: "testingrekognition1234", Key: key })
              .promise();
            return imageData.Body;
          })
        );
        setImageUrls(urls);
      } catch (error) {
        console.error(error);
      }
    }

    getImageUrls();
  }, []);

  
  console.log(imageUrls)
  return (
    <div className="Faces">
      <SideBar />
      <div className="container">
        Trusted Faces
        <div className="header">
          <div>
            {imageUrls.map((url) => (
              <img key={url} src={url} alt="Example" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faces;
