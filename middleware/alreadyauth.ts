// user should not be able to go to home page if on profile page
export default defineNuxtRouteMiddleware(async (to, from) => {
  const userStore = useUserStore();

  if (!!userStore.user) {
    return await navigateTo("/profile");
  }
});
