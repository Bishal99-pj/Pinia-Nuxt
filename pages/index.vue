<template>
  <div class="container mx-auto h-full grid place-items-center">
    <div class="flex flex-col gap-y-3 items-center">
      <h1>Welcome</h1>
      <p>Sign In here</p>
      <button @click="handleSignIn">Sign In</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const userStore = useUserStore();

definePageMeta({
  middleware: ['alreadyauth']
})

const handleSignIn = async () => {
  await userStore.signIn({
    username: 'kminchelle',
    password: '0lelplR',
  });

  await navigateTo("/profile", { replace: true })
}
</script>

<style scoped></style>