import React, { useState, useEffect } from "react";
import { UserInfoProps } from "./user-info";
import { BookInfoProps } from "./book-info";

interface DataLoaderProp {
  getData: () => Promise<UserInfoProps | BookInfoProps> | string | null;
  resourceName: string;
  children: React.ReactNode;
}

export const DataSource: React.FC<DataLoaderProp> = ({
  getData,
  resourceName,
  children,
}) => {
  const [resource, setResource] = useState<
    UserInfoProps | BookInfoProps | null | string
  >(null);

  useEffect(() => {
    (async () => {
      const data = await getData();
      setResource(data);
    })();
  }, [getData]);

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
