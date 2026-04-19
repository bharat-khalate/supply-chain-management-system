"use client";
import React, { useEffect, useRef } from "react";
import { CKEditor, useCKEditorCloud } from "@ckeditor/ckeditor5-react";
import { FieldError, TextField } from "@heroui/react";
import { shouldShowError } from "@/utils/validations";
import { ICustomEditorProps } from "@/types";
import AppSpinner from "../common/Spinner";
import { debounce } from "@/utils/helpers/debounce.helper";

const CustomEditor = <T,>({ formik, fieldKey }: ICustomEditorProps<T>) => {
  const isMounted = useRef(false);
  const isEditorReady = useRef(false);
  const fieldKeyRef = useRef(fieldKey);
  const debouncedUpdateRef = useRef<((data: string) => void) | null>(null);

  // keep latest fieldKey
  useEffect(() => {
    fieldKeyRef.current = fieldKey;
  }, [fieldKey]);

  // mount tracking
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  // initialize debounce AFTER mount (important)
  useEffect(() => {
    debouncedUpdateRef.current = debounce((data: string) => {
      if (!isMounted.current) return;

      formik.setFieldValue(fieldKeyRef.current, data);
    }, 100);

    return () => {
      debouncedUpdateRef.current?.cancel?.();
    };
  }, [formik]);

  const API_KEY = process.env.NEXT_PUBLIC_CK_EDITOR_API_KEY;

  const cloud = useCKEditorCloud({
    version: "48.0.0",
  });

  if (cloud.status === "error") {
    return <div>Error loading editor</div>;
  }

  if (cloud.status === "loading") {
    return <AppSpinner />;
  }

  const {
    ClassicEditor,
    Essentials,
    Paragraph,
    Bold,
    Italic,
    Strikethrough,
    Superscript,
    Subscript,
    Heading,
    Underline,
    Indent,
    IndentBlock,
    List,
    AutoLink,
    Link,
    Fullscreen,
  } = cloud.CKEditor;

  const inputErrorMessageClass =
    "text-[0.8rem] font-medium text-destructive";
  const isInvalid = shouldShowError(formik);

  return (
    <TextField
      isRequired
      isInvalid={isInvalid(fieldKey as never)}
      aria-label={fieldKey}
    >
      <CKEditor
        editor={ClassicEditor}
        data={(formik.values[fieldKey] as string) || ""}
        onReady={() => {
          isEditorReady.current = true;
        }}
        onChange={(event, editor) => {
          if (!isMounted.current || !isEditorReady.current) return;

          const data = editor.getData();
          debouncedUpdateRef.current?.(data);
        }}
        onBlur={() => {
          if (isMounted.current) {
            formik.setFieldTouched(fieldKey as string, true);
          }
        }}
        config={{
          licenseKey: API_KEY,
          plugins: [
            Essentials,
            Paragraph,
            Bold,
            Italic,
            Strikethrough,
            Superscript,
            Subscript,
            Heading,
            Underline,
            Indent,
            IndentBlock,
            List,
            AutoLink,
            Link,
            Fullscreen,
          ],
          toolbar: [
            "bold",
            "italic",
            "underline",
            "strikethrough",
            "superscript",
            "subscript",
            "heading",
            "bulletedList",
            "numberedList",
            "indent",
            "outdent",
            "undo",
            "redo",
            "link",
            "fullscreen",
          ],
          link: {
            toolbar: [
              "linkPreview",
              "|",
              "editLink",
              "linkProperties",
              "unlink",
            ],
          },
        }}
      />

      {formik.touched[fieldKey] && formik.errors[fieldKey] && (
        <FieldError className={inputErrorMessageClass}>
          {formik.errors[fieldKey] as string}
        </FieldError>
      )}
    </TextField>
  );
};

export default CustomEditor;