import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { Outlet } from "react-router";
import { ContactForm } from "../components/ContactForm";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollToTopButton/>
      <Footer />
    </>
  );
};
