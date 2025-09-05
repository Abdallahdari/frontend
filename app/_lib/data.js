import API_BASE_URL from "./axious";

export async function GetexamsAll() {
  try {
    const res = await API_BASE_URL.get("/exams");
    return res.data;
  } catch (error) {
    if (error.response && error.response.data?.message) {
      throw new Error(error.response.data.message);
    }
  }
}

export async function Getallreviews() {
  try {
    const res = await API_BASE_URL.get("/comments");
    return res.data;
  } catch (error) {
    if (error.res && error.response.data?.message) {
      throw new Error(error.response.data.message);
    }
  }
}

export async function CreateReview(data) {
  try {
    const res = await API_BASE_URL.post("/comments", data);
    return res.data;
  } catch (error) {
    if (error.response && error.response.data?.message) {
      throw new Error(error.response.data.message);
    }
  }
}
