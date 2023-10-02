export default function ChatMessageRecipient({ user, message }) {
  function renderUsername() {
    return user.slice(0, 1);
  }
  return (
    <div className="col-start-1 col-end-8 rounded-lg p-3">
      <div className="flex flex-row items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-500">
          {renderUsername()}
        </div>
        <div className="relative ml-3 rounded-xl bg-white px-4 py-2 text-sm shadow">
          <div>{message}</div>
        </div>
      </div>
    </div>
  );
}
