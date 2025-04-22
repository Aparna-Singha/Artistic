import { useEffect, useState } from "react";
import { pingApi } from "../../api/ping";
import "./ApiLoader.css";

const ApiLoader = () => {
  const [loading, setLoading] = useState(true);
  const [longerLoading, setLongerLoading] = useState(false);

  useEffect(() => {
    const ping = () => {
      pingApi.then(() => {
        setLoading(false);
      });
    };

    ping();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) {
        setLongerLoading(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [loading]);

  if (!loading) return null;

  return (
    <div className="api-loader">
      <div className="loader-content">
        <span className="loader-spinner" />
        <span className="loader-text">
          <span className="normal-loading">
            Connecting to the server...
          </span>
          {longerLoading &&
            <span className="longer-loading">
              The server is waking up from a nap...
              This may take upto a minute...
            </span>
          }
        </span>
      </div>
    </div>
  );
};

export default ApiLoader;
