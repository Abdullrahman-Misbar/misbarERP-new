import { t } from "i18next";
import type { GroupBase, OptionsOrGroups } from "react-select";
import { CFile_TP } from "../types";
import { toHijri } from "hijri-converter";

//  PDF OR IMAGE
type pdfOrImageReturn = "pdf" | "image" | "unknown";
export const pdfOrImage = (file: CFile_TP): pdfOrImageReturn => {
  const pdfWordOccurrence = file?.type?.indexOf("pdf");
  const imageWordOccurrence = file?.type?.indexOf("image");
  if (pdfWordOccurrence !== -1) {
    return "pdf";
  } else if (imageWordOccurrence !== -1) {
    return "image";
  } else {
    return "unknown";
  }
};
export const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
export const getFileTypeFromURL = (url) => {
  const extension = url?.split(".")?.pop()?.toLowerCase();
  if (
    extension === "png" ||
    extension === "jpg" ||
    extension === "jpeg" ||
    extension === "gif"
  ) {
    return "image";
  } else if (extension === "pdf") {
    return "pdf";
  } else {
    return "unknown";
  }
};

// translate
export const link = () =>
  /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
export const Must_be_only_number = () => `${t("Must be only number")}`;
export const Enter_correct_url = () => `${t("Enter correct url!")}`;
export const requiredTranslation = () => `${t("required")}`;

export const pagePaginate = 10;

const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, ms);
  });
export type OptionType = {
  value: string;
  label?: string;
};
export const loadOptions = async (
  search: string,
  prevOptions: OptionsOrGroups<OptionType, GroupBase<OptionType>>,
  options: any
) => {
  await sleep(1000);

  let filteredOptions: OptionType[];
  if (!search) {
    filteredOptions = options;
  } else {
    const searchLower = search.toLowerCase();

    filteredOptions = options.filter(({ label }: any) =>
      label.toLowerCase().includes(searchLower)
    );
  }

  const hasMore = filteredOptions.length > prevOptions.length + 10;
  const slicedOptions = filteredOptions.slice(
    prevOptions.length,
    prevOptions.length + 10
  );

  return {
    options: slicedOptions,
    hasMore,
  };
};

// delete string spaces
export const deleteSpaces = (str: string) => str.replace(/\s+/g, "");

export function getIDfromURL(url: any) {
  const regExp =
    /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;

  const match = url?.match(regExp);

  if (match && match[2].length === 11) {
    return match[2];
  }

  return "";
}

export const indexTable = (index: any, page: any) => {
  return index + 1 + Math.abs(page - 1) * pagePaginate;
};

export function convertTo24Hour(timeString: any) {
  const match = timeString.match(/(\d{1,2}):(\d{2})\s?(AM|PM)/i);
  if (!match) {
    console.log("Invalid time format");
    return timeString; // or throw new Error("Invalid time format");
  }
  let hours = parseInt(match[1], 10);
  const minutes = match[2];
  const ampm = match[3].toUpperCase();

  if (ampm === "AM" && hours == 12) {
    hours = 0;
  } else if (ampm === "PM" && hours < 12) {
    hours += 12;
  }
  return `${hours.toString().padStart(2, "0")}:${minutes}`;
}

export function convertToDynamicShape(value) {
  return value.map((item) => ({
    key: {
      ar: item.key_ar,
      en: item.key_en,
    },
    value: {
      ar: item.value_ar,
      en: item.value_en,
    },
  }));
}

export function flattenChildren(data: any) {
  let result: any[] = [];
  function recurse(items: any[]) {
    items.forEach((item) => {
      const { children, ...rest } = item;
      result.push(rest);
      if (children && children.length > 0) {
        recurse(children);
      }
    });
  }
  recurse(data);
  return result;
}
export function arrayToObject(arr: string[]) {
  let result = {};
  arr?.forEach((item: string) => {
    //@ts-ignore
    result[item?.key_en] = item;
  });
  return result;
}
export function convertDateTime(dateTimeString: string): string {
  const date = new Date(dateTimeString);
  const formattedDate = date.toISOString().split("T")[0];
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const period = hours >= 12 ? "م" : "ص";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  // return ` ${formattedTime} ${period} / ${formattedDate} `;
  return ` ${formattedDate} `;
}

export const convertToHijri = (date: string | number | Date) => {
  let hijriDate = new Date(date);
  return toHijri(
    hijriDate.getFullYear(),
    hijriDate.getMonth() + 1,
    hijriDate.getDate()
  );
};
export const padWithZero = (number: { toString: () => any }) => {
  let numStr = number.toString();
  if (numStr.length === 1) {
    numStr = "0" + numStr;
  }
  return numStr;
};

export function getInitials(name: string | undefined): string {
  if (!name) return "NA";
  const nameParts = name.split(" ");
  const firstInitial = nameParts[0] ? nameParts[0][0] : "";
  const lastInitial = nameParts[1] ? nameParts[1][0] : "";
  return `${firstInitial}${lastInitial}`.toUpperCase();
}
export function formateTime(dateTimeString: string): string {
  const date = new Date(dateTimeString);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return ` ${formattedTime} ${period} `;
}