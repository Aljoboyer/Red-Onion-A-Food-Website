import { useContext } from "react"
import { Contextauth } from "./Authcontext"

const useAuth = () => {
    return useContext(Contextauth)
}

export default useAuth;