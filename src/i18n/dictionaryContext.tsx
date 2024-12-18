"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { getDictionary } from "./dictionaries";
import { enumLocale, IDictionary } from "./types";

const DictionaryContext = createContext<IDictionary | null>(null);

export const useDictionary = (): IDictionary | null => {
  return useContext(DictionaryContext);
};

interface DictionaryProviderProps {
  children: ReactNode;
  language: enumLocale;
}

export const DictionaryProvider = ({
  children,
  language,
}: DictionaryProviderProps) => {
  const [dictionary, setDictionary] = useState<IDictionary | null>(null);

  useEffect(() => {
    const fetchDictionary = async () => {
      const dict = await getDictionary(language);
      setDictionary(dict);
    };

    if (!dictionary) {
      fetchDictionary();
    }
  }, [language, dictionary]);

  return (
    <DictionaryContext.Provider value={dictionary}>
      {children}
    </DictionaryContext.Provider>
  );
};
