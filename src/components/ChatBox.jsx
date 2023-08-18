import Message from "./Message"

function ChatBox() {

    const messages = [
        {
            id:1,
            text: "Hello there!",
            name: "candince"
        },
        {
            id: 2,
            text: "h1!",
            name: "Milana"
        }
    ]

  return (
    <div className="pb-44 pt-20 containerWrap">
        {messages.map(message => (
            <Message key={message.id} message={message}/>
        ))}
    </div>
  )
}

export default ChatBox