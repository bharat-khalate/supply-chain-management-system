"use client";
import { IAppEditorProps } from "@/types";
import dynamic from "next/dynamic";
import React from "react";
import AppSpinner from "./Spinner";


// const Editor = React.lazy(() => import("@/components/ui/Editor"));
// const CustomAppEditor = <T,>({ formik, fieldKey }: IAppEditorProps<T>) => {
//   return (
//     <React.Suspense fallback={<div>loading...</div>}>
//       <Editor formik={formik} fieldKey={fieldKey} />
//     </React.Suspense>
//   );
// };
// export default CustomAppEditor;

const Editor = dynamic(() => import("@/components/ui/Editor"), {
  ssr: false,
  loading: () => <AppSpinner />,
});

export default function CustomAppEditor<T>({
  formik,
  fieldKey,
}: IAppEditorProps<T>): React.ReactNode {
  return <Editor formik={formik} fieldKey={fieldKey} />;
}
