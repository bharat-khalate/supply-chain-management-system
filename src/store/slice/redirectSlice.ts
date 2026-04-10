import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../Store";



 const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const dispatcher = useAppDispatch();

    const navigate = (href: string) => {
        startTransition(() => {
            router.push(href);
        });
    };

const redirectSlice = createSlice({
    name: "redirectSlice",
    initialState: {
        redirecting: false,
        navigate: (href: string) => { },
    },
    reducers: {
        setDependencies: (state, action) => {
            return action.payload;
        }
    }
})

export default redirectSlice.reducer;
export const { setDependencies } = redirectSlice.actions;
export const redirectSelector = (state: RootState) => state.redirectSlice;
