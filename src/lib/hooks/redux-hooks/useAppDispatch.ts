
import { IDispatch } from "@/store/Store"
import { useDispatch } from "react-redux"


/**
 * following function will create 
 * @returns typed dispatcher
 */
const useAppDispatch = () => useDispatch<IDispatch>();
export default useAppDispatch