export default function ChatMessageSender({ user, message }) {
  function renderUsername() {
    return user.slice(0, 1);
  }
  return (
    <div className="col-start-6 col-end-13 rounded-lg p-3">
      <div className="flex flex-row-reverse items-center justify-start">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-500">
          {renderUsername()}
        </div>
        <div className="relative mr-3 rounded-xl bg-indigo-100 px-4 py-2 text-sm shadow">
          <div>{message}</div>
        </div>
      </div>
    </div>
  );
}
