import { useNavigate, useParams } from "react-router-dom";
import MultiStepForm from "../features/MultiStepForm/MultiStepForm";
import useGetProfile from "../features/profile/hooks/useGetProfile";
function MiltiStepForm() {
  const params = useParams();
  const navigate = useNavigate();
  const [profileData] = useGetProfile(params.user);

  if (profileData.none) {
    navigate("/");
  }
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 pb-28">
      <MultiStepForm user={profileData} />
    </div>
  );
}

export default MiltiStepForm;
