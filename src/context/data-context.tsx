import React, { ReactNode, useState } from "react";

interface Props {
  children: React.ReactNode;
}

type DataType = {
  userId: string;
  accessToken: string;
  setUserId: (value: string) => void;
  setAccessToken: (value: string) => void;
};

const DataContext = React.createContext<DataType>({
  userId: "",
  accessToken: "",
  setUserId: () => {},
  setAccessToken: () => {},
});

export const DataProvider: React.FC<Props> = ({
  children,
}: {
  children: ReactNode;
}): React.ReactElement => {
  const [userId, setUserId] = useState<string>("");
  const [accessToken, setAccessToken] = useState<string>("");

  return (
    <DataContext.Provider
      value={{
        userId,
        setUserId,
        accessToken,
        setAccessToken,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
