import React from "react";
import { styled } from "styled-components";
import {
  Center,
  Layers,
  Pad,
  Split,
} from "./patterns-components/design-patterns";
import SideBar from "./side-bar";
import RightSide from "./right-side";

const ContentArea = styled(Pad).attrs(() => ({ padding: "xl" }))`
  background-image: linear-gradient(
    to bottom,
    #0f1623 14rem,
    rgb(242, 242, 242) 14rem
  );
`;

const SettingsHeader = styled.header`
  color: white;
`;

const SettingsPane = styled(Split).attrs(() => ({
  gutter: "none",
  fraction: "1/4",
}))`
  background: white;
  border-radius: 0.5rem;
`;

const Content = () => {
  return (
    <ContentArea>
      <Center as={Layers} gutter={"l"} maxWidth={"85rem"}>
        <SettingsHeader>
          <h1>Profile Setting</h1>
        </SettingsHeader>
        <SettingsPane>
          <SideBar />
          <RightSide />
        </SettingsPane>
      </Center>
    </ContentArea>
  );
};

export default Content;
