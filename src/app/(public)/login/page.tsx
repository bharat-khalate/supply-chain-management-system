'use client';

import { useFormik } from 'formik';
import { loginValidationSchema } from '@/validation/authform.validation';
import { useDispatch, useSelector } from 'react-redux';
import { loginSubmit, useAuthLoading, useAuthError } from '@/store/slice/authSlice';
import { useRouter } from 'next/navigation';
import { IDispatch, RootState } from '@/store/Store';
import Link from 'next/link';
import ButtonLoader from '@/components/common/ButtonLoader';
import { FieldError, Input, Label, TextField } from "@heroui/react";
import AppLogo from '@/components/common/AppLogo';

export default function LoginPage() {
  const dispatch = useDispatch<IDispatch>();
  const router = useRouter();

  const loading = useSelector((state: RootState) => useAuthLoading(state));
  const error = useSelector((state: RootState) => useAuthError(state));

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      const resultAction = await dispatch(loginSubmit(values));
      if (loginSubmit.fulfilled.match(resultAction)) {
        router.push('/dashboard');
      }
    },
  });

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/20 p-4">
      <div className="w-full max-w-md rounded-xl border bg-card text-card-foreground shadow">
        <AppLogo className="items-center justify-center pt-8 pb-2" />
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="font-semibold tracking-tight text-2xl">Login</h3>
          <p className="text-sm text-muted-foreground">
            Enter your email and password to access your dashboard.
          </p>
        </div>

        <div className="p-6 pt-0">
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

            <TextField
              isRequired
              isInvalid={!!(formik.touched.password && formik.errors.password)}
              className="space-y-2"
            >
              <div className="flex items-center justify-between">
                <Label isRequired htmlFor="password" className="text-sm font-medium leading-none">Password</Label>
                <Link href="/forgot-password" className="text-sm font-medium text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
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

            <button
              type="submit"
              disabled={loading || !formik.isValid || !formik.dirty}
              className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              {loading ? <ButtonLoader className="text-white dark:text-black" /> : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
