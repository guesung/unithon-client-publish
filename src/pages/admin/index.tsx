import React, { useRef, useState } from "react";

export default function Admin() {
  return <UploadCSV />;
}

function UploadCSV() {
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef();

  const handleUploadCSV = () => {
    setUploading(true);
    // @TODO fetch CSV
  };

  return (
    <>
      <CSVInput uploading={uploading} ref={inputRef} />
      <UploadButton uploading={uploading} handleUploadCSV={handleUploadCSV} />
    </>
  );
}

const CSVInput = React.forwardRef(_CSVInput);

function _CSVInput({ uploading }: { uploading: boolean }) {
  return <input disabled={uploading} type="file" />;
}

function UploadButton({ uploading, handleUploadCSV }: { uploading: boolean; handleUploadCSV: () => void }) {
  return (
    <button disabled={uploading} onClick={handleUploadCSV}>
      upload
    </button>
  );
}
