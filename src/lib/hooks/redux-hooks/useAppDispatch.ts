import { IDispatch } from "@/redux/Store"
import { useDispatch } from "react-redux"
/**
 * following function will create 
 * @returns typed dispatcher
 */
const useAppDispatch = () => useDispatch<IDispatch>();
export default useAppDispatch