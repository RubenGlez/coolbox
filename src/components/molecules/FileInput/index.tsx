import { ChangeEvent, DragEvent, useId, useRef, useState } from "react";
import Typography from "../../../components/atoms/Typography";
import { FileInputWrapper, FileInputHiddenInput } from "./styles";
import { FileInputProps } from "./types";

export default function FileInput({ handleFile }: FileInputProps) {
  const id = useId();
  const [isDragActive, setIsDragActive] = useState(false);
  const inputRef = useRef(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files);
    }
  };

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files);
    }
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    <FileInputWrapper
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      <label htmlFor={id}>
        <Typography color={isDragActive ? "primary" : "inactive"} size="m">
          Drop your files here 👇
        </Typography>
      </label>

      <FileInputHiddenInput
        ref={inputRef}
        id={id}
        type="file"
        multiple={true}
        onChange={handleChange}
      />
    </FileInputWrapper>
  );
}
