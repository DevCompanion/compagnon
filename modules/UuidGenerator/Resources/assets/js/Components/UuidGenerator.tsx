import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
export default function UuidGenerator() {
  const [uuid, setUuid] = useState(uuidv4());
  const generateUuidv4 = () => {
    setUuid(uuidv4());
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(uuid);
  }

  return (
    <>
      <div className="w-full sm:max-w-xl mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
        <div className="flex flex-row">
          <div className="flex-grow">
            <div className="text-lg font-semibold text-gray-900">
              {uuid}
              <button onClick={copyToClipboard} className="ml-2 text-sm text-gray-500 hover:text-gray-700">
                Copy
              </button>
              <button onClick={generateUuidv4} className="ml-2 text-sm text-gray-500 hover:text-gray-700">
                Generate
              </button>
            </div>
            <div className="text-sm text-gray-500">
              Universally Unique Identifier (UUID v4)
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
