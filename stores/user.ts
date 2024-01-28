import { defineStore } from "pinia";
import { type User, type Customer, type Login } from "@/types/UserType";

export const useUserStore = defineStore("user", () => {
  // states
  const user = ref();
  const token = useCookie("USER_COOKIE", {
    maxAge: 60 * 60,
    sameSite: true,
  });
  const customer = ref();

  // setters
  const setToken = (data?: string) => (token.value = data);
  const setUser = (data?: User) => (user.value = data);
  const setCustomer = (data?: Customer) => (customer.value = data);

  // methods
  const signIn = async (data: Login) => {
    try {
      const res = await $fetch<User>("https://dummyjson.com/auth/login", {
        method: "POST",
        body: data,
      });
      setToken(res?.token);
      await setAuthUser();
      await fetchCustomer();
    } catch (error) {
      setToken();
      setUser();
      console.error(error);
    }
  };

  const fetchCustomer = async () => {
    if (token.value) {
      try {
        const res = await $fetch<Customer>("https://dummyjson.com/users/1");
        setCustomer(res);
      } catch (error) {
        setCustomer();
        console.error(error);
      }
    }
  };

  const logOut = () => {
    setToken();
    setUser();
    setCustomer();
  };

  const setAuthUser = async () => {
    if (token.value) {
      try {
        const res = await $fetch<User>("https://dummyjson.com/auth/me", {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        });
        setUser(res);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return {
    // states
    user,
    token,
    customer,
    // getters
    // methods
    setUser,
    setToken,
    signIn,
    setAuthUser,
    fetchCustomer,
    logOut,
  };
});
