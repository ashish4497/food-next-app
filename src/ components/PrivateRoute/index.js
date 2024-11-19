import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  console.log(isAuthenticated, "231");

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  return isAuthenticated ? children : null;
};

export default PrivateRoute;
