import { createContext, useState, useContext, ReactNode } from 'react';

type MyContextType = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const MyContext = createContext<MyContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export const MyContextProvider: React.FC<Props> = ({ children }: Props) => {
  const [value, setValue] = useState('');

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = (): MyContextType => {
  const context = useContext(MyContext);

  if (context === undefined) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }

  return context;
};
