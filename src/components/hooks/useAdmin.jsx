import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
  
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery(
      ["isAdmin", user?.email],
      async () => {
        const res = await axiosSecure.get(`/users/admin/${user?.email}`);
        return res.data.admin;
      },
      {
        enabled: !!user?.email && !!localStorage.getItem("access-token") && !loading,
      }
    );
  
    return [isAdmin, isAdminLoading];
  };
  
  export default useAdmin;
  