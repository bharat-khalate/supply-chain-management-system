'use client'

import { UndoRedo } from '@tiptap/extensions'
import { EditorContent, useEditor, useEditorState } from '@tiptap/react'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Heading from '@tiptap/extension-heading'
import Bold from '@tiptap/extension-bold'
import ItalicExt from '@tiptap/extension-italic'
import UnderlineExt from '@tiptap/extension-underline'
import Strike from '@tiptap/extension-strike'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import ListItem from '@tiptap/extension-list-item'
import { Button, FieldError, TextField } from '@heroui/react'
import {
    Bold as BoldI,
    Italic,
    Underline,
    Strikethrough,
    List,
    ListOrdered,
    Undo,
    Redo,
    Maximize2,
    Minimize2,
    Save,
    RotateCcw
} from 'lucide-react'
import { IAppEditorProps } from '@/types'
import { shouldShowError } from '@/utils/validations'
import { useEffect, useState } from 'react'
import AppDotLoader from '../common/NavigationDotloader'
import { InputFieldErrorMessageClass } from '@/utils/tailwindCssClassConstant'
const btnClass =
    'p-2 rounded-md hover:bg-gray-200 active:bg-gray-300 transition flex items-center justify-center'
const activeClass = 'bg-gray-300'
const Divider = () => (
    <div className="w-px h-5 bg-gray-300 mx-1" />
)
const Tiptap = <T,>({ formik, fieldKey }: IAppEditorProps<T>) => {
    const isInvalid = shouldShowError(formik);
    const editor = useEditor({
        extensions: [
            Document,
            Paragraph,
            Text,
            Heading.configure({ levels: [1, 2, 3] }),
            Bold,
            ItalicExt,
            UnderlineExt,
            Strike,
            BulletList,
            OrderedList,
            ListItem,
            UndoRedo
        ],
        content: formik.values[fieldKey] as string,
        immediatelyRender: false,
        onUpdate: ({ editor }) => {
            const html = editor.getHTML()
            formik.setFieldValue(fieldKey as string, html)
        },
    })
    useEffect(() => {
        if (editor && formik.values[fieldKey] !== editor.getHTML()) {
            editor.commands.setContent(formik.values[fieldKey] as string)
        }
    }, [formik.values[fieldKey], editor, fieldKey, formik.values])
    useEffect(() => {
        if (!editor) return
        const handleBlur = () => {
            formik.setFieldTouched(fieldKey as string, true)
        }
        editor.on('blur', handleBlur)
        return () => {
            editor.off('blur', handleBlur)
        }
    }, [editor])
    const { canUndo, canRedo } = useEditorState({
        editor,
        selector: (ctx) => ({
            canUndo: ctx.editor?.can().chain().focus().undo().run(),
            canRedo: ctx.editor?.can().chain().focus().redo().run(),
        }),
    }) ?? { canUndo: false, canRedo: false }

    if (!editor) return null
    return (
        <div className={`flex flex-col rounded-lg border bg-white shadow-sm overflow-hidden transition-all border-gray-300`}
        >
            <div className="flex items-center gap-1 px-2 py-1.5 bg-gray-50 border-b border-gray-200">
                <Button
                    className={`${btnClass} ${editor.isActive('bold') ? activeClass : ''}`}
                    onPress={() => editor.chain().focus().toggleBold().run()}
                >
                    <BoldI size={16} />
                </Button>
                <Button
                    className={`${btnClass} ${editor.isActive('italic') ? activeClass : ''}`}
                    onPress={() => editor.chain().focus().toggleItalic().run()}
                >
                    <Italic size={16} />
                </Button>
                <Button
                    className={`${btnClass} ${editor.isActive('underline') ? activeClass : ''}`}
                    onPress={() => editor.chain().focus().toggleUnderline().run()}
                >
                    <Underline size={16} />
                </Button>
                <Button
                    className={`${btnClass} ${editor.isActive('strike') ? activeClass : ''}`}
                    onPress={() => editor.chain().focus().toggleStrike().run()}
                >
                    <Strikethrough size={16} />
                </Button>
                <Divider />
                <select
                    className="text-sm bg-transparent px-2 py-1 rounded hover:bg-gray-100 focus:outline-none"
                    onChange={(e) => {
                        const value = e.target.value;

                        if (value === 'paragraph') {
                            editor.chain().focus().setParagraph().run();
                        } else {
                            editor
                                .chain()
                                .focus()
                                .toggleHeading({ level: Number(value) as 1 | 2 | 3 })
                                .run();
                        }
                    }}
                >
                    <option value="paragraph">Paragraph</option>
                    <option value="1">Heading 1</option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                </select>
                <Divider />
                <Button
                    className={`${btnClass} ${editor.isActive('bulletList') ? activeClass : ''}`}
                    onPress={() => editor.chain().focus().toggleBulletList().run()}
                >
                    <List size={16} />
                </Button>
                <Button
                    className={`${btnClass} ${editor.isActive('orderedList') ? activeClass : ''}`}
                    onPress={() => editor.chain().focus().toggleOrderedList().run()}
                >
                    <ListOrdered size={16} />
                </Button>
                <Divider />
                <Button
                    className={btnClass}
                    onPress={() => editor.chain().focus().undo().run()}
                    isDisabled={!canUndo}
                >
                    <Undo size={16} />
                </Button>
                <Button
                    className={btnClass}
                    onPress={() => editor.chain().focus().redo().run()}
                    isDisabled={!canRedo}
                >
                    <Redo size={16} />
                </Button>
                    
            </div>
            <div className={`p-3 `}>
                <TextField
                    isRequired
                    isInvalid={isInvalid(fieldKey)}
                    aria-label={fieldKey as string}
                >
                    <EditorContent editor={editor} />
                    {(formik.touched[fieldKey] || formik.submitCount > 0)  &&
                        formik.errors[fieldKey] && (
                            <FieldError className={`${InputFieldErrorMessageClass} mt-2 sticky bottom-0 bg-white`}>
                                {formik.errors[fieldKey] as string}
                            </FieldError>
                        )}
                </TextField>
            </div>
        </div>
    )
}

export default Tiptap