"use client";
// InitializedMDXEditor.tsx
import type { ForwardedRef } from "react";
import "@mdxeditor/editor/style.css";
import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  type MDXEditorMethods,
  type MDXEditorProps,
  toolbarPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  InsertImage,
  linkPlugin,
  linkDialogPlugin,
  imagePlugin,
  tablePlugin,
  frontmatterPlugin,
} from "@mdxeditor/editor";

async function imageUploadHandler(image: File) {
  const formData = new FormData();
  formData.append("image", image);
  // send the file to your server and return
  // the URL of the uploaded image in the response
  const response = await fetch("/uploads/new", {
    method: "POST",
    body: formData,
  });
  const json = (await response.json()) as { url: string };
  return json.url;
}
// Only import this to the next file
export default function InitializedMDXEditor({
  editorRef,
  ...props
}: { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps) {
  return (
    <MDXEditor
      className="dark-theme dark-editor"
      plugins={[
        // Example Plugin Usage
        listsPlugin(),
        quotePlugin(),
        headingsPlugin(),
        linkPlugin(),
        linkDialogPlugin(),
        imagePlugin({
          imageUploadHandler,
        }),
        tablePlugin(),
        thematicBreakPlugin(),
        frontmatterPlugin(),
        markdownShortcutPlugin(),
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <UndoRedo />
              <BoldItalicUnderlineToggles />
              <InsertImage />
            </>
          ),
        }),
      ]}
      {...props}
      ref={editorRef}
    />
  );
}
