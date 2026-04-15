import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "@/services/auth.service";
import { RootState } from "../Store";
import { IAuthState, ILoginCredentials, IResetPasswordData } from "@/types/auth.types";

export const loginSubmit = createAsyncThunk(
    "auth/login",
    async (credentials: ILoginCredentials, { rejectWithValue }) => {
        try {
            const response = await authService.login(credentials.email, credentials.password);
            return response;
        } catch (error: any) {
            return rejectWithValue(error.message || "Login failed");
        }
    }
);

export const forgotPasswordSubmit = createAsyncThunk(
    "auth/forgotPassword",
    async (email: string, { rejectWithValue }) => {
        try {
            const response = await authService.forgotPassword(email);
            return response;
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to send reset link");
        }
    }
);

export const resetPasswordSubmit = createAsyncThunk(
    "auth/resetPassword",
    async (credentials: IResetPasswordData, { rejectWithValue }) => {
        try {
            const response = await authService.resetPassword(credentials.password, credentials.token);
            return response;
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to reset password");
        }
    }
);

const initialState: IAuthState = {
    user: null,
    token: typeof document !== "undefined" ? localStorage.getItem("token") : null,
    loading: false,
    error: null,
    successMessage: null,
};

const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.error = null;
            state.successMessage = null;
            if (typeof document !== "undefined") {
              localStorage.removeItem("token");
            }
        },
        clearAuthStatus: (state) => {
            state.error = null;
            state.successMessage = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginSubmit.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginSubmit.fulfilled, (state, action: any) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(loginSubmit.rejected, (state, action: any) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(forgotPasswordSubmit.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.successMessage = null;
            })
            .addCase(forgotPasswordSubmit.fulfilled, (state, action: any) => {
                state.loading = false;
                state.successMessage = action.payload.message;
            })
            .addCase(forgotPasswordSubmit.rejected, (state, action: any) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(resetPasswordSubmit.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.successMessage = null;
            })
            .addCase(resetPasswordSubmit.fulfilled, (state, action: any) => {
                state.loading = false;
                state.successMessage = action.payload.message;
            })
            .addCase(resetPasswordSubmit.rejected, (state, action: any) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { logout, clearAuthStatus } = slice.actions;
export const useAuthUser = (store: RootState) => store.authSlice.user;
export const useAuthLoading = (store: RootState) => store.authSlice.loading;
export const useAuthError = (store: RootState) => store.authSlice.error;
export const useAuthSuccessMessage = (store: RootState) => store.authSlice.successMessage;

export default slice.reducer;
