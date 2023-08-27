function MessageComponentEachUser({ message, index }) {
  return (
    <div className="relative flex flex-row  ">
      <div className="absolute text-xs text-gray-500 right-0 top-0  ">
        5 min
      </div>
      <div className="flex  h-12 w-12 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
        <img
          src={`/images/avatars/avatar-${index}.webp`}
          className=" rounded-full"
        ></img>
      </div>
      <div className="flex flex-col  text-start flex-grow ml-3">
        <div className="text-sm font-medium">{message.name} </div>
        <div className="text-xs truncate w-40">{message.message}</div>
      </div>
      <div className="flex-shrink-0 ml-2 self-end mb-1">
        <span className="flex items-center justify-center h-5 w-5 bg-red-500 text-white text-xs rounded-full">
          5
        </span>
      </div>
    </div>
  );
}

export default MessageComponentEachUser;
