import { useEffect, useState } from "react";
import "./ApiLoader.css";
import { pingApi } from "../../api/ping";

const ApiLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ping = async () => {
      await pingApi();
      setLoading(false);
    };

    ping();
  }, []);

  if (!loading) return null;

  return (
    <div className="api-loader">
      <div className="loader-content">
        <span className="loader-spinner" />
        <span className="loader-text">
          Connecting to the server...
        </span>
      </div>
    </div>
  );
};

export default ApiLoader;
