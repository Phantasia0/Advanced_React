import React, { useState, useEffect } from "react";
import axios from "axios";

const toCaptial = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const includeUpdatableResource = (
  Component: React.FC,
  resourceUrl: string,
  resourceName: string,
) => {
  return (props: any) => {
    const [initialResource, setInitialResource] = useState<any>(null);
    const [resource, setResource] = useState<any>(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(resourceUrl, {
          baseURL: "http://localhost:9090",
        });
        setInitialResource(response.data);
        setResource(response.data);
      })();
    }, []);

    const onChange = (updates: any) => {
      setResource({ ...resource, ...updates });
    };

    const onPost = async () => {
      const response = await axios.post(
        resourceUrl,
        { [resourceName]: resource },
        { baseURL: "http://localhost:9090" },
      );
      setInitialResource(response.data);
      setResource(response.data);
    };

    const onReset = () => {
      setResource(initialResource);
    };

    const resourceProps = {
      [resourceName]: resource,
      [`onChange${toCaptial(resourceName)}`]: onChange,
      [`onPost${toCaptial(resourceName)}`]: onPost,
      [`onReset${toCaptial(resourceName)}`]: onReset,
    };

    return <Component {...props} {...resourceProps} />;
  };
};
