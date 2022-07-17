import { config } from "../utils/config";
import client from "./client";

const get = async () => {
  try {
    const res = await client.get("api/dough/list", { headers: config.headers });
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log("GET request error: ", error);
  }
};

const add = async (values: any, func: any) => {
  try {
    const res = await client.post("api/dough/add", { name: values.name }, { headers: config.headers });
    if (res.status === 200) {
      func();
    }
  } catch (error) {
    console.log("add error: ", error);
  }
};

const modify = async (values: any, func: any) => {
  try {
    const res = await client.put("api/dough/modify", { name: values.name, id: values.id }, { headers: config.headers });
    if (res.status === 200) {
      func();
    }
  } catch (error) {
    console.log("modify error: ", error);
  }
};

const erase = async (values: any, func: any) => {
  try {
    const res = await client.delete("api/dough/erase", { data: { name: values.name, id: values.id }, headers: config.headers });
    console.log(res);
    if (res.status === 200) {
      func();
    }
  } catch (error) {
    console.log("error erasing: ", error);
  }
};

const call = async (key: any, values: any, func: any) => {
  switch (key) {
    case "get":
      const data = await get();
      return data;
    case "post":
      await add(values, func);
      break;
    case "put":
      await modify(values, func);
      break;
    case "delete":
      erase(values, func);
      break;
    default:
      break;
  }
};

export { get, add, modify, call };
