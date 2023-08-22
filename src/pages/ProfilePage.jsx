import ProfileCard from "../components/ProfileCard";
import ProfileItems from "../components/ProfileItems";

export default function ProfilePage() {
  return (
    <div className="max-w-7xl sm:flex gap-4 mx-auto py-12">
      <ProfileCard />
      <ProfileItems />
    </div>
  );
}
