import { toast } from "react-toastify";

export const toastMsg = (text: string, isError: boolean = false) => {
  isError ? toast.error(text) : toast.success(text);
};
