<template>
    <div class="grid place-items-center mt-20 gap-2">
        <h1>Admin Profile of {{ userStore.user?.firstName }}</h1>
        <button @click="handleSignOut">Sign Out</button>
        <div>Customer details</div>
        <div>{{ userStore.customer }}</div>
    </div>
</template>

<script lang="ts" setup>
const userStore = useUserStore()

definePageMeta({
    middleware: ['protect']
})


const handleSignOut = async () => {
    userStore.logOut()
    useRouter().go(0)
}
</script>

<style scoped></style>