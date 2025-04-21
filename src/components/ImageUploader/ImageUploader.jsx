import { useCallback } from "react";
import { IKContext, IKUpload } from "imagekitio-react";

import { getImageAuth } from "../../api/upload";
import { useStorage } from "../../hooks/storage";

const ikEndpointUrl = 'https://ik.imagekit.io/aparna/';
const publicKey = 'public_EfcIq+TGpFGsTUw7LgG4UYIwZu4=';

const ImageUploader = ({ setImageUrl }) => {
  const { getStorage } = useStorage();
  const username = getStorage('username', null);

  const onSuccess = useCallback((data) => {
    setImageUrl(data.url);
  }, [setImageUrl]);

  const onError = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <IKContext
    publicKey={publicKey}
    urlEndpoint={ikEndpointUrl}
    authenticator={getImageAuth}
    >
      <IKUpload
        disabled={username === null}
        folder={`artists/${username}`}
        fileName={`${Date.now()}.jpg`}
        onError={onError}
        onSuccess={onSuccess}
        />
    </IKContext>
  );
};

export default ImageUploader;
