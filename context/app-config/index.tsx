import { createContext, useEffect, useState } from "react";

export interface IAppConfig {
  theme: "dark" | "light" | "auto";
  language: string;
}

const initialConfig: IAppConfig = {
  theme: "light",
  language: "en",
};

export const AppConfigContext = createContext({});

const AppConfigWrapper = ({ children }: any) => {
  const [config, setConfig] = useState<IAppConfig>(initialConfig);

  useEffect(() => {
    const currentConfig = localStorage.getItem("app-Config");
    if (currentConfig) {
      setConfig(JSON.parse(currentConfig));
    } else {
      localStorage.setItem("app-config", JSON.stringify(initialConfig));
    }
  }, []);

  return (
    <AppConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </AppConfigContext.Provider>
  );
};

export default AppConfigWrapper;
