
import axios from "axios";
const API_BASE = "/api";

export const signup = (username: string, password: string) =>
  axios.post(`${API_BASE}/signup`, { username, password }).then(r => r.data);

export const login = (username: string, password: string) =>
  axios.post(`${API_BASE}/login`, { username, password }).then(r => r.data);

export const suggestTopics = (profile_text: string) =>
  axios.post(`${API_BASE}/suggest-topics`, { profile_text }).then(r => r.data);

export const generateResearch = (faculty_profile: string, topic_choice: string, custom_topic: string) =>
  axios.post(`${API_BASE}/generate-research`, { faculty_profile, topic_choice, custom_topic }).then(r => r.data);
