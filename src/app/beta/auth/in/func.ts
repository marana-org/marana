"use server";

import { mongoUserModel } from "../../../../../lib/types/User";

export const discoverUser = (formData: FormData) => {
  return mongoUserModel.findById(formData.get("identifier"));
};
