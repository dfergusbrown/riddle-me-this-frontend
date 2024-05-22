import { api } from "../apiConnection";

// HUNT INSTANCE

export const createHuntInstance = async (huntTemplateId, payload) => {
  return await api.post(
    `/hunt-templates/${huntTemplateId}/hunt-instances/`,
    payload,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

// GET HUNT INSTANCE

export const getHuntInstancesByTemplate = async (huntTemplateId) => {
  return await api.get(`/hunt-templates/${huntTemplateId}/hunt-instances/`);
};

// GET HUNT INSTANCE BY ID

export const getHuntInstanceById = async (huntInstanceId) => {
  return await api.get(`/hunt-instances/${huntInstanceId}`);
}