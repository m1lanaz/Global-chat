import { useState } from "react";
import { UserAuth } from "../context/AuthContexts";
import { db } from "../firebase";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";

function SendMessage() {
  const [value, setValue] = useState("");
  const { currentUser } = UserAuth();
  const [isSending, setIsSending] = useState(false); // Add state to track sending state

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      alert("Enter valid message");
      return;
    }

    try {
      setIsSending(true); // Set sending state to true

      const { uid, displayName, photoURL } = currentUser;
      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid,
      });

      // Clear input field after successful send
      setValue("");
    } catch (error) {
      console.log(error);
    } finally {
      setIsSending(false); // Reset sending state
    }
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
          <button
            className="bg-gray-500 text-white rounded-r-lg px-5"
            disabled={isSending} // Disable button while sending
          >
            {isSending ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
