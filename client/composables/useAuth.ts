import { ref, provide, inject, Ref } from "vue";
import { useLoginUser } from "~/api/mutateData/useLoginUser";
import { useRouter } from "nuxt/app";
const AuthSymbol = Symbol();

interface LoginError {
  status: string;
  message: string;
}

interface Auth {
  user: { value: string } | null;
  login: (
    credentials: Record<string, unknown>
  ) => Promise<LoginError | undefined>;
  logout: () => void;
}

export function useProvideAuth() {
  const { mutateAsync: loginUser } = useLoginUser();
  const user: Ref<string | null> = ref(null);
  const router = useRouter();

  const login = async (
    credentials: Record<string, unknown>
  ): Promise<void | LoginError> => {
    try {
      const userData = await loginUser(credentials);

      user.value = userData.data.token;
      if (process.client) {
        localStorage.setItem("token", userData.data.token);
        router.push("/");
      }
    } catch (error: any) {
      return { status: "err", message: error.response.data.message };
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
  const auth = inject<Auth | null>(AuthSymbol);
  if (!auth) throw new Error("No auth provided!!!");

  return auth;
}
