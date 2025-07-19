import React from "react";
import { useLocation } from "react-router-dom";
import SEOHead, { WebsiteStructuredData } from "./SEOHead";
import { pageSEO, defaultSEO } from "../utils/seo";

const SEOWrapper = ({ children }) => {
  const location = useLocation();

  // Get SEO data based on current route
  const getSEOData = () => {
    const path = location.pathname;

    // Map routes to SEO data
    const routeMap = {
      "/": "home",
      "/blog": "blog",
      "/about": "about",
      "/contact": "contact",
      "/login": "login",
      "/register": "register",
    };

    const pageKey = routeMap[path];
    return pageKey ? { ...defaultSEO, ...pageSEO[pageKey] } : defaultSEO;
  };

  const seoData = getSEOData();

  return (
    <>
      <SEOHead {...seoData} />
      <WebsiteStructuredData />
      {children}
    </>
  );
};

export default SEOWrapper;
