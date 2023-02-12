import FileInput from "../../components/molecules/FileInput";
import { ConversionPageWrapper } from "./styles";

export default function ConversionPage() {
  const handleFile = (files: FileList) => {
    alert("Number of files: " + files.length);
  };

  return (
    <ConversionPageWrapper>
      <FileInput handleFile={handleFile} />
    </ConversionPageWrapper>
  );
}
