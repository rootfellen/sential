"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("07d0ec20-662d-43c5-96eb-bf4276c8c225");
  }, []);

  return null;
};
