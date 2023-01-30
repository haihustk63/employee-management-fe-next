import { v4 as uuidv4 } from "uuid";
import purity from "dompurify";

export const createUniqueId = () => {
  return uuidv4();
};

const addKeyToData = (data: any[] = [], createKey?: any) => {
  return data.map((item) => ({
    key: item?.id || createKey?.(item) || createUniqueId(),
    ...item,
  }));
};

const makeCleanObject = (obj: object = {}) => {
  return Object.fromEntries(
    Object.entries(obj).filter(
      (p: any) => ![undefined, null, ""].includes(p[1])
    )
  );
};

const purityContent = (content?: string) => {
  if (!content) return "";
  return purity.sanitize(content);
};

export { addKeyToData, makeCleanObject, purityContent };
