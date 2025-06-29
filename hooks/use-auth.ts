import authClient, { signIn } from "@/lib/auth-client";
import { useAuthStore } from "@/stores/authStore";
import { useEffect } from "react";

export const useAuth = () => {
  const { data: session, isPending } = authClient.useSession();
  const { user, isLoading, isAuthenticated, setUser, setLoading } = useAuthStore();

  useEffect(() => {
    setLoading(isPending);
    if (!isPending) {
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email,
          name: session.user.name,
          image: session.user.image ?? "",
        });
      } else {
        setUser(null);
      }
    }
  }, [session, isPending, setUser, setLoading]);

  const login = async () => {
    try {
      await signIn();
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = async () => {
    await authClient.signOut();
  };

  return { user, isLoading, isAuthenticated, login, logout };
};
