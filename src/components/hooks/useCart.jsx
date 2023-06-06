// import { useQuery } from '@tanstack/react-query'
// import { useContext } from 'react';
// import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
// import useAxiosSecure from './useAxiosSecure';


// const useCart = () => {
//     const {user} = useContext(AuthContext)
//     const [axiosSecure] = useAxiosSecure()
//     const token = localStorage.getItem('access-token');
//     const {  refetch,  data: cart = []  } = useQuery({
//         queryKey: ['carts', user?.email],
//         // queryFn: async () => {
//         //     const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {headers:{authorization: `bearer ${token}`}})
//         //     if (!response.ok) {
//         //       throw new Error('Network response was not ok')
//         //     }
//         //     return response.json()
//         //   },
//         queryFn: async () => {
//             const response = await axiosSecure(`/carts?email=${user?.email}`)
//             console.log(response)
//             return response.data;
//           },

       
//       })

//       return [ cart,refetch]


// };

// export default useCart;

import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';

import useAuth from './useAuth';
const useCart = () => {
    const { user, loading } =  useAuth()
    
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled:!!user?.email && !!localStorage.getItem("access-token") && !loading,
        
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            // console.log('res from axios', res)
            return res.data;
        },
    })

    return [cart, refetch]

}
export default useCart;

  // queryFn: async () => {
        //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, { headers: {
        //         authorization: `bearer ${token}`
        //     }})
        //     return res.json();
        // },