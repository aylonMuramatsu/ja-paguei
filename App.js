import { StatusBar } from "expo-status-bar";
import React from "react";
import Router from "./src/system/router";
import "./src/util/helper";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Router />
    </>
  );
}
