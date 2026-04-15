'use client';

import { useFormik } from 'formik';
import { resetPasswordValidationSchema } from '@/validation/authform.validation';
import { useDispatch, useSelector } from 'react-redux';
import { resetPasswordSubmit, useAuthLoading, useAuthError, useAuthSuccessMessage, clearAuthStatus } from '@/store/slice/authSlice';
import { IDispatch, RootState } from '@/store/Store';
import Link from 'next/link';
import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ButtonLoader from '@/components/common/ButtonLoader';
import { FieldError, Input, Label, TextField } from "@heroui/react";
import AppLogo from '@/components/common/AppLogo';

function ResetPasswordForm() {
  const dispatch = useDispatch<IDispatch>();
  const searchParams = useSearchParams();
  const token = searchParams.get('token') || '';
  
  const loading = useSelector((state: RootState) => useAuthLoading(state));
  const error = useSelector((state: RootState) => useAuthError(state));
  const successMessage = useSelector((state: RootState) => useAuthSuccessMessage(state));

  // Clear messages on unmount
  useEffect(() => {
    return () => {
      dispatch(clearAuthStatus());
    };
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: resetPasswordValidationSchema,
    onSubmit: async (values) => {
      await dispatch(resetPasswordSubmit({ password: values.password, token }));
    },
  });

  return (
    <div className="w-full max-w-md rounded-xl border bg-card text-card-foreground shadow">
      <AppLogo className="items-center justify-center pt-8 pb-2" />
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="font-semibold tracking-tight text-2xl">Reset Password</h3>
        <p className="text-sm text-muted-foreground">
          Enter your new password below.
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
              isInvalid={!!(formik.touched.password && formik.errors.password)}
              className="space-y-2"
            >
              <Label htmlFor="password" className="text-sm font-medium leading-none">New Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="********"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors data-[invalid=true]:border-destructive data-[invalid=true]:focus-visible:ring-destructive focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FieldError className="text-xs text-destructive">{formik.errors.password}</FieldError>
            </TextField>

            <TextField
              isRequired
              isInvalid={!!(formik.touched.confirmPassword && formik.errors.confirmPassword)}
              className="space-y-2"
            >
              <Label htmlFor="confirmPassword" className="text-sm font-medium leading-none">Confirm New Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="********"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors data-[invalid=true]:border-destructive data-[invalid=true]:focus-visible:ring-destructive focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FieldError className="text-xs text-destructive">{formik.errors.confirmPassword}</FieldError>
            </TextField>
            
            <button
              type="submit"
              disabled={loading || !formik.isValid || !formik.dirty}
              className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              {loading ? <ButtonLoader className="text-white dark:text-black" /> : 'Reset Password'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/20 p-4">
      <Suspense fallback={<div className="w-full max-w-md p-6 text-center text-sm text-muted-foreground">Loading...</div>}>
        <ResetPasswordForm />
      </Suspense>
    </main>
  );
}
