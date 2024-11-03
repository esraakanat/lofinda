import Cookies from "js-cookie";

// setting cookies
export const setCookie = (name, value) => {
   Cookies.set(name, value, { expires: 2 });
};

export const getCookie = (name) => {
   if (name) return Cookies.get(name);
   return Cookies.get();
};

export const removeCookie = (name) => {
   if (name) return Cookies.remove(name);
   return Cookies.remove();
};
