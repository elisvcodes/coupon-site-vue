import { ref, provide, inject, Ref } from "vue";
import { loginUser } from "~/api/mutateData/auth";

const AuthSymbol = Symbol();

export function useProvideAuth() {
  const user: Ref<string | null> = ref(null);

  const login = async (credentials: Object) => {
    const userData = await loginUser(credentials);
    user.value = userData.data.token;
    if (process.client) {
      localStorage.setItem("user", JSON.stringify(userData));
    }
  };

  const logout = () => {
    user.value = null;
    if (process.client) {
      localStorage.removeItem("token");
    }
  };

  const checkUser = () => {
    if (process.client && localStorage.getItem("token")) {
      const userData = localStorage.getItem("token")!;
      if (userData) user.value = userData;
    }
  };

  checkUser();

  provide(AuthSymbol, { user, login, logout });

  return { user, login, logout };
}

export function useAuth() {
  const auth = inject(AuthSymbol);
  if (!auth) throw new Error("No auth provided!!!");

  return auth;
}
