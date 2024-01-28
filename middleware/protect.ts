export default defineNuxtRouteMiddleware(async (to, from) => {
  const userStore = useUserStore();
  // if user is undefined we can not go the profile/dashboard page ever
  if (!userStore.user) {
    return await navigateTo("/");
  }
});
