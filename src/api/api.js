import axios from "axios";

const baseUrl = 'https://dev.to/api/articles';

export const fetchBlogs = async (page = 1, limit = 4) => {
  try {
    const res = await axios.get(baseUrl, {
      params: {
        page,
        per_page: limit
      }
    });
    return { data: res.data, error: null };
  } catch (err) {
    return { data: [], error: err.message };
  }
}

export const fetchBlogById = async id => {
  try {
    const res = await axios.get(`${baseUrl}/${id}`)
    return { data: res.data, error: null };
  } catch (err) {
    return { data: null, error: err.message };
  }
}