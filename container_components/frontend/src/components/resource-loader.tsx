import React, { useState, useEffect } from "react";
import axios from "axios";

interface ResourceLoaderProp {
  resourceUrl: string;
  resourceName: string;
  children: React.ReactNode;
}

export const ResourceLoader: React.FC<ResourceLoaderProp> = ({
  resourceUrl,
  resourceName,
  children,
}) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:9090" + resourceUrl);
      setResource(response.data);
    })();
  }, [resourceUrl]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        }
        return child;
      })}
    </>
  );
};
