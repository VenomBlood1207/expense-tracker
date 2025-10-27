const API_BASE = "http://localhost:8000";

export const api = {
  get: (url) => fetch(`${API_BASE}${url}`).then(res => res.json()),
  post: (url, data) => fetch(`${API_BASE}${url}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(res => res.json())
};
