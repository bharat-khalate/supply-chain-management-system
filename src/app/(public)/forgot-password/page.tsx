'use client';

import { useFormik } from 'formik';
import { forgotPasswordValidationSchema } from '@/validation/authform.validation';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPasswordSubmit, useAuthLoading, useAuthError, useAuthSuccessMessage, clearAuthStatus } from '@/store/slice/authSlice';
import { IDispatch, RootState } from '@/store/Store';
import Link from 'next/link';
import { useEffect } from 'react';
import ButtonLoader from '@/components/common/ButtonLoader';
import { FieldError, Input, Label, TextField } from "@heroui/react";
import AppLogo from '@/components/common/AppLogo';

export default function ForgotPasswordPage() {
  const dispatch = useDispatch<IDispatch>();
  
  const loading = useSelector((state: RootState) => useAuthLoading(state));
  const error = useSelector((state: RootState) => useAuthError(state));
  const successMessage = useSelector((state: RootState) => useAuthSuccessMessage(state));

  useEffect(() => {
    return () => {
      dispatch(clearAuthStatus());
    };
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: forgotPasswordValidationSchema,
    onSubmit: async (values) => {
      await dispatch(forgotPasswordSubmit(values.email));
    },
  });

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/20 p-4">
      <div className="w-full max-w-md rounded-xl border bg-card text-card-foreground shadow">
        <AppLogo className="items-center justify-center pt-8 pb-2" />
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="font-semibold tracking-tight text-2xl">Forgot Password</h3>
          <p className="text-sm text-muted-foreground">
            Enter your email to receive a password reset link.
          </p>
        </div>
        
        <div className="p-6 pt-0">
          {successMessage ? (
            <div className="space-y-4">
              <div className="rounded-md bg-green-500/15 p-3 text-sm text-green-600 dark:text-green-400">
                {successMessage}
              </div>
              <Link 
                href="/login" 
                className="inline-flex w-full items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Return to login
              </Link>
            </div>
          ) : (
            <form onSubmit={formik.handleSubmit} className="space-y-4">
              {error && (
                <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
                  {error}
                </div>
              )}
              
              <TextField
                isRequired
                isInvalid={!!(formik.touched.email && formik.errors.email)}
                className="space-y-2"
              >
                <Label htmlFor="email" className="text-sm font-medium leading-none">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors data-[invalid=true]:border-destructive data-[invalid=true]:focus-visible:ring-destructive focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FieldError className="text-xs text-destructive">{formik.errors.email}</FieldError>
              </TextField>
              
              <button
                type="submit"
                disabled={loading || !formik.isValid || !formik.dirty}
                className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                {loading ? <ButtonLoader className="text-white dark:text-black" /> : 'Send reset link'}
              </button>

              <div className="mt-4 text-center text-sm">
                <Link href="/login" className="text-muted-foreground hover:text-foreground">
                  Back to login
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
