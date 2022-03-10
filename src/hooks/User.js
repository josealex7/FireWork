import {useEffect, useState} from 'react'
import { getAuth } from "firebase/auth";  

const User = () => {
    const auth = getAuth();
    const user = auth.currentUser;

    const [value, setValue] = useState({});

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const datosUser = () =>{
        if (user !== null) {
                setValue({
                    "name":user.displayName,
                    "email":user.email,
                    "photoURL":user.photoURL,
                    "emailVerified":user.emailVerified,
                    "uid":user.uid
                })
        }
    }

    useEffect(() => {
        datosUser()
    }, [datosUser])

    return value
}

export default User