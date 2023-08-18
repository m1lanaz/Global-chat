import { useState } from "react";

function SendMessage() {
  const [value, setValue] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log(value);
    setValue("");
  };

  return (
    <div className="bg-gray-200 fixed bottom-0 w-full py-10">
      <form onSubmit={handleSendMessage} className="px-2 containerWrap">
        <div className="flex">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="input flex-1 focus:outline-none bg-gray-100 rounded-l-lg"
            type="text"
          />
          <button className="bg-gray-500 text-white rounded-r-lg px-5">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
