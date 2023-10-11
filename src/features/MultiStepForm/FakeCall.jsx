import supabase from "../../services/supabase";

function FakeCall() {
  const item1 = {
    title: "[Valorant] Unranked Valorant Smurf Account - Premium Skins & More",
    price: 149.99,
    description:
      "Start fresh with this Unranked Valorant smurf account, equipped with premium weapon skins and extra goodies. Climb the ranks in style!",
    stock: 1,

    serviceId: 6,
    gameId: 9,
  };
  // const item2 = {
  //   title:
  //     "[Valorant] Platinum Valorant Account - Unlocked Agents & Competitive Ready",
  //   price: 199.99,
  //   description:
  //     "Take your Valorant game to the next level with this Platinum-ranked account. All agents unlocked and ready for competitive play!",
  //   stock: 1,

  //   serviceId: 6,
  //   gameId: 9,
  // };

  // const item3 = {
  //   title: "[Valorant] Radiant Smurf Account - Rare Skins & High MMR",
  //   price: 299.99,
  //   description:
  //     "Dominate the competition with this Radiant-ranked Valorant smurf account. It comes with rare weapon skins and a high MMR rating!",
  //   stock: 1,

  //   serviceId: 6,
  //   gameId: 9,
  // };

  // const item4 = {
  //   title: "[Valorant] Gold Valorant Account - Skins & Competitive Edge",
  //   price: 149.99,
  //   description:
  //     "Secure your victory with this Gold-ranked Valorant account. It includes exclusive skins and a competitive edge to climb the ladder!",
  //   stock: 1,

  //   serviceId: 6,
  //   gameId: 9,
  // };

  // const item5 = {
  //   title: "[Valorant] Diamond Valorant Smurf Account - Premium Skins & More",
  //   price: 249.99,
  //   description:
  //     "Ascend the ranks with style using this Diamond-ranked Valorant smurf account. Premium skins and extras are all at your fingertips!",
  //   stock: 1,

  //   serviceId: 6,
  //   gameId: 9,
  // };

  //   const item6 = {
  //     title:
  //       "[Valorant] Immortal Valorant Account - Unlocked Agents & Competitive Ready",
  //     price: 299.99,
  //     description:
  //       "Become an immortal in Valorant with this account. All agents are unlocked, and it's ready for competitive play at the highest level!",
  //     stock: 1,

  //     serviceId: 6,
  //     gameId: 9,
  //   };

  //   const item7 = {
  //     title: "[Valorant] Silver Valorant Account - Skins & Competitive Edge",
  //     price: 129.99,
  //     description:
  //       "Climb the ranks swiftly with this Silver-ranked Valorant account. It includes exclusive skins and a competitive edge to secure your victories!",
  //     stock: 1,
  //     serviceId: 6,
  //     gameId: 9,
  //   };

  //   const item8 = {
  //     title:
  //       "[Valorant] Grandmaster Valorant Smurf Account - Premium Skins & More",
  //     price: 349.99,
  //     description:
  //       "Achieve Grandmaster status with this Valorant smurf account. It features premium skins and all the extras you need to dominate the game!",
  //     stock: 1,
  //     serviceId: 6,
  //     gameId: 9,
  //   };

  //   const item9 = {
  //     title:
  //       "[Valorant] Bronze Valorant Account - Unlocked Agents & Competitive Ready",
  //     price: 119.99,
  //     description:
  //       "Prepare for competitive play with this Bronze-ranked Valorant account. All agents are unlocked, and it's ready for your journey to the top!",
  //     stock: 1,

  //     serviceId: 6,
  //     gameId: 9,
  //   };

  //   const item10 = {
  //     title: "[Valorant] Iron Valorant Smurf Account - Rare Skins & High MMR",
  //     price: 99.99,
  //     description:
  //       "Challenge yourself with this Iron-ranked Valorant smurf account. It comes with rare weapon skins and a high MMR rating for a unique experience!",
  //     stock: 1,

  //     serviceId: 6,
  //     gameId: 9,
  //   };

  //   const user = { id: "bb2e70fa-9f22-4eb2-b0ce-82ba1bf0e709" };
  // const apexItem1 = {
  //     title: "Apex Legends Account - Level 50 Champion",
  //     price: 49.99,
  //     description:
  //       "Elevate your Apex Legends experience with this level 50 Champion account. It's packed with legendary skins, apex coins, and exclusive banners, ready for you to dominate the arena. Show your prowess and conquer the Apex Games!",
  //     stock: 1,
  //     serviceId: 6,
  //     gameId: 2,
  //   };

  //   const apexItem2 = {
  //     title: "Apex Legends Battle Pass Bundle - Season 6",
  //     price: 29.99,
  //     description:
  //       "Gear up for Season 6 of Apex Legends with this exclusive Battle Pass bundle. Unlock new legends, skins, and weapon charms as you climb the ranks. Join the battle, stand out, and emerge as a legend in the Apex Games!",
  //     stock: 1,
  //     serviceId: 6,
  //     gameId: 2,
  //   };

  //   const apexItem3 = {
  //     title: "Apex Legends Account - Apex Predator",
  //     price: 99.99,
  //     description:
  //       "Dominate the competition in Apex Legends as an Apex Predator. This account boasts legendary skins, exclusive badges, and a high MMR rating, giving you the edge you need to become a champion in the arena. Crush your rivals and ascend to the top!",
  //     stock: 1,
  //     serviceId: 6,
  //     gameId: 2,
  //   };

  //   const apexItem4 = {
  //     title: "Apex Legends Starter Pack - Legends & Skins",
  //     price: 19.99,
  //     description:
  //       "Kickstart your journey in Apex Legends with this Starter Pack. Unlock new legends and skins to customize your arsenal and make your mark in the Apex Games. Prepare for battle and rise through the ranks!",
  //     stock: 1,
  //     serviceId: 6,
  //     gameId: 2,
  //   };

  //   const apexItem5 = {
  //     title: "Apex Legends Account - Season 7 Master",
  //     price: 79.99,
  //     description:
  //       "Step into Season 7 of Apex Legends with the power of a Master-ranked account. Legendary skins, apex coins, and exclusive banners await you. Showcase your skills and conquer the Apex Games like never before!",
  //     stock: 1,
  //     serviceId: 6,
  //     gameId: 2,
  //   };

  //   const apexItem6 = {
  //     title: "Apex Legends Champion Edition - Legends & More",
  //     price: 59.99,
  //     description:
  //       "Upgrade to the Champion Edition of Apex Legends and unlock legendary characters, exclusive weapon skins, and more. Gain the upper hand and leave your mark in the Apex Games. Elevate your legend status today!",
  //     stock: 1,
  //     serviceId: 6,
  //     gameId: 2,
  //   };

  //   const apexItem7 = {
  //     title: "Apex Legends Account - High Kill Count",
  //     price: 69.99,
  //     description:
  //       "Amass a high kill count in Apex Legends with this account. It comes with legendary weapon skins and exclusive banners to showcase your prowess. Dominate the arena, eliminate your foes, and become a legend in your own right!",
  //     stock: 1,
  //     serviceId: 6,
  //     gameId: 2,
  //   };

  //   const apexItem8 = {
  //     title: "Apex Legends Battle Pass Bundle - Season 8",
  //     price: 29.99,
  //     description:
  //       "Prepare for Season 8 of Apex Legends with this Battle Pass bundle. Unlock new legends, skins, and emotes as you rise through the ranks. Join the battle, make your mark, and become a legend in the Apex Games!",
  //     stock: 1,
  //     serviceId: 6,
  //     gameId: 2,
  //   };

  //   const apexItem9 = {
  //     title: "Apex Legends Account - Apex Champion",
  //     price: 129.99,
  //     description:
  //       "Claim the title of Apex Champion with this account. It features legendary skins, apex coins, and exclusive badges to prove your prowess. Crush your competition and reign supreme in the Apex Games!",
  //     stock: 1,
  //     serviceId: 6,
  //     gameId: 2,
  //   };

  //   const apexItem10 = {
  //     title: "Apex Legends Starter Pack - Legends & Skins",
  //     price: 19.99,
  //     description:
  //       "Embark on your Apex Legends journey with this Starter Pack. Unlock new legends and skins to customize your gameplay and make your mark in the Apex Games. Prepare for battle and rise through the ranks!",
  //     stock: 1,
  //     serviceId: 6,
  //     gameId: 2,
  //   };

  //   const user = { id: "31e0a50e-2bb0-4b3f-966f-c36d03fcd162" };
  //   const item1 = {
  //     title: "[CS:GO] Unranked CSGO Smurf Account - Premium Skins & More",
  //     price: 149.99,
  //     description:
  //       "Start fresh with this Unranked CSGO smurf account. It comes equipped with premium weapon skins, extra goodies, and a clean slate for your competitive journey. Climb the ranks in style and showcase your skills with confidence!",
  //     stock: 1,
  //     serviceId: 6,
  //     gameId: 1,
  //   };

  //   const item2 = {
  //     title: "[CS:GO] Platinum CSGO Account - Skins & Competitive Ready",
  //     price: 199.99,
  //     description:
  //       "Take your CS:GO game to the next level with this Platinum-ranked account. It includes exclusive skins and is ready for competitive play with a rank that shines brightly. Stand out among your peers and dominate the arena!",
  //     stock: 1,
  //     serviceId: 6,
  //     gameId: 1,
  //   };

  //   const item3 = {
  //     title: "[CS:GO] Global Elite CSGO Smurf Account - Rare Skins & High MMR",
  //     price: 299.99,
  //     description:
  //       "Dominate the competition with this Global Elite-ranked CSGO smurf account. It comes with rare weapon skins, a high MMR rating, and everything you need to rise to the top of the CS:GO world. Crush your foes and leave a lasting legacy!",
  //     stock: 1,
  //     serviceId: 6,
  //     gameId: 1,
  //   };

  //   const item4 = {
  //     title: "[CS:GO] Gold Nova CSGO Account - Skins & Competitive Edge",
  //     price: 149.99,
  //     description:
  //       "Secure your victories with this Gold Nova-ranked CSGO account. It includes exclusive skins and a competitive edge to help you climb the ladder and stand out among your peers. Unleash your potential and claim your glory!",
  //     stock: 1,
  //     serviceId: 6,
  //     gameId: 1,
  //   };

  //   const item5 = {
  //     title:
  //       "[CS:GO] Supreme Master First Class CSGO Smurf Account - Premium Skins & More",
  //     price: 249.99,
  //     description:
  //       "Ascend the ranks in style using this Supreme Master First Class-ranked CSGO smurf account. Premium skins and extras are all at your fingertips, ready to help you dominate your opponents. Showcase your elite skills and reign supreme!",
  //     stock: 1,
  //     serviceId: 6,
  //     gameId: 1,
  //   };

  //   const item6 = {
  //     title: "[CS:GO] Legendary Eagle CSGO Account - Skins & Competitive Ready",
  //     price: 299.99,
  //     description:
  //       "Become a legend in CS:GO with this Legendary Eagle-ranked account. It's fully prepared for competitive play, and all the agents are unlocked, setting you up for success on the battlefield. Rise above the competition and achieve greatness!",
  //     stock: 1,
  //     serviceId: 6,
  //     gameId: 1,
  //   };

  //   const item7 = {
  //     title: "[CS:GO] Silver Elite CSGO Account - Rare Skins & Competitive Edge",
  //     price: 129.99,
  //     description:
  //       "Climb the ranks swiftly with this Silver Elite-ranked CSGO account. It includes exclusive skins and a competitive edge to secure your victories and rise through the ranks of the CS:GO community. Prove your worth and excel!",
  //     stock: 1,
  //     serviceId: 6,
  //     gameId: 1,
  //   };

  //   const item8 = {
  //     title: "[CS:GO] Global Elite CSGO Smurf Account - Premium Skins & More",
  //     price: 349.99,
  //     description:
  //       "Achieve the status of a Global Elite with this CSGO smurf account. It features premium skins and all the extras you need to dominate the game and reach the pinnacle of success in the CS:GO universe. Show the world your unmatched skills!",
  //     stock: 1,
  //     serviceId: 6,
  //     gameId: 1,
  //   };

  //   const item9 = {
  //     title: "[CS:GO] Silver CSGO Account - Skins & Competitive Ready",
  //     price: 119.99,
  //     description:
  //       "Prepare for competitive play with this Silver-ranked CSGO account. It's fully equipped with unlocked agents and ready for your journey to the top of the competitive ladder in CS:GO. Train hard and climb to greatness!",
  //     stock: 1,
  //     serviceId: 6,
  //     gameId: 1,
  //   };

  // const item10 = {
  //   title: "[CS:GO] Iron CSGO Smurf Account - Rare Skins & High MMR",
  //   price: 99.99,
  //   description:
  //     "Challenge yourself with this Iron-ranked CSGO smurf account. It comes with rare weapon skins and a high MMR rating, offering a unique and exciting gaming experience that only a true CS:GO enthusiast can appreciate. Embrace the challenge and become a legend!",
  //   stock: 1,
  //   serviceId: 6,
  //   gameId: 1,
  // };

  const user = { id: "bb2e70fa-9f22-4eb2-b0ce-82ba1bf0e709" };

  const handleCreateItem = async () => {
    try {
      const createdItems = await createItem(item1, user);
      console.log("Created items:", createdItems);
    } catch (error) {
      console.error("Error creating items:", error);
    }
  };
  async function createItem(values, user) {
    const { data: updatedData, error } = await supabase.from("items").upsert([
      {
        title: values.title,
        price: values.price,
        description: values.description,
        stock: values.stock,
        seller_id: user.id,
        images: [
          "https://gymfqfbuzjjanrwewyft.supabase.co/storage/v1/object/public/item_images/CSGOACCOUNT2.webp",
          "https://gymfqfbuzjjanrwewyft.supabase.co/storage/v1/object/public/item_images/CSGOACCOUNT3.webp",
          "https://gymfqfbuzjjanrwewyft.supabase.co/storage/v1/object/public/item_images/CSGOACCOUNT1.webp",
        ],
        category_id: values.serviceId,
        game_id: values.gameId,
      },
    ]);
  }

  return (
    <button
      onClick={handleCreateItem}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer"
    >
      Click me
    </button>
  );
}

export default FakeCall;
