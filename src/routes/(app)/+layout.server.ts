import { error } from "@sveltejs/kit";

export const load = async ({ locals: { profile, roles, user } }) => {
  console.log("profile", profile);
  if (!profile) {
    console.error("Profile not found for user", user?.id, user?.email);
    error(500);
  }

  return {
    profile,
    roles,
  };
};
