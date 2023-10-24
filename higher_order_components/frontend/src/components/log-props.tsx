import React from "react";

export const logProps = (Component: React.FC) => {
  return (props: any) => {
    console.log(props);
    return <Component {...props} />;
  };
};
1;
