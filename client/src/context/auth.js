// import { useState, useContext, createContext } from "react"

// const UserLoginContext = createContext()

// let UserLoginContextProvider = ({children}) => {
//     const [userLoggedIn, setUserLoggedIn] = useState(false)

//     return (
//         <UserLoginContext.Provider value={{userLoggedIn, setUserLoggedIn}}>
//             {children}
//         </UserLoginContext.Provider>
//     )
// }

// const useUserLogin = () => useContext(UserLoginContext)

// export { UserLoginContextProvider, useUserLogin }


import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";


const AuthContext = createContext();

let AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: "",
    });

    //default axios property 
    axios.defaults.headers.common['Authorization'] = auth?.token;
    useEffect(() => {
        const data = localStorage.getItem('auth')
        //conditinaly check
        if (data) {
            const parseData = JSON.parse(data)
            setAuth({
                ...auth,
                user: parseData.user,
                token: parseData.token,
            })
        }
    }, [])
    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

// custom hook
const useAuth = () => useContext(AuthContext)

export { useAuth, AuthProvider }