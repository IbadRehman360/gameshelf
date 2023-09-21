import supabase from "../../../services/supabase";

export default async function useCreateChat(author, recipient) {
  const { data: allChatUsers } = await supabase.from("chat_users").select("*")
  console.log(allChatUsers);
  if (allChatUsers.length > 0) {
    console.log("in");
    allChatUsers.forEach(async (chat) => {
      console.log(author, chat.author_id);
      console.log(recipient, chat.recipient_id);

      if (chat.author_id !== author || chat.recipient_id !== recipient) {
        createChat(author, recipient);
        console.log("test")
      }
    });
  }else{
    createChat(author,recipient);
  }
}

async function createChat(author, recipient) {
  const { data } = await supabase.from("chats").insert({}).select("*");
  
  const newChatObj = {
    id: data[0].id,
    author_id: author,
    recipient_id: recipient,
  };

  const { data: newChat } = await supabase
    .from("chat_users")
    .insert(newChatObj)
    .select("*");

    console.log(newChat);
}
