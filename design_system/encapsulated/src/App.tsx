import React from "react";
import "./App.css";
import SubscribeForm from "./components/1-layers-pattern/start";
import InfoForm from "./components/2-split-pattern/start";
import { InfoFormWithColumns } from "./components/3-columns-pattern/start";
import Cards from "./components/4-grid-pattern/start";
import BundledMenu from "./components/5-inline-bundle-pattern/start";
import Menu from "./components/6-inline-pattern/start";
import GiftCardList from "./components/7-pad-pattern/start";
import Profile from "./components/8-center-pattern/start";
import NewProductsList from "./components/9-media-wrapper-pattern/start";
import HeroPage from "./components/10-cover-pattern/start";
import Modal from "./components/12-modal/modal";

function App() {
  return (
    <>
      <Modal />
    </>
  );
}

export default App;
