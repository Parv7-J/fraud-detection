import axios from "axios";

const API_BASE_URL = "https://084b-35-201-233-83.ngrok-free.app"; // FastAPI Backend URL

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "X-API-KEY":
      "42bcb9b5bfab7a69de851828c99908cf04a88f9ab449bb3b783ab4bda5650981", // Replace with actual API key
    "Content-Type": "application/json",
  },
});

// Fraud Detection API Calls
export const predictFraud = (transaction) =>
  apiClient.post("/predict", transaction);
export const batchPredictFraud = (batchRequest) =>
  apiClient.post("/batch-predict", batchRequest);
export const reportFraud = (report) => apiClient.post("/report-fraud", report);
export const fetchTransactions = () => apiClient.get("/transactions");
export const fetchFraudComparison = () => apiClient.get("/fraud-comparison");
export const fetchTimeSeriesData = () => apiClient.get("/time-series");
export const fetchEvaluationMetrics = () =>
  apiClient.get("/evaluation-metrics");
