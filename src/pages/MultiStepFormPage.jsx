import { useNavigate, useParams } from "react-router-dom";
import MultiStepForm from "../features/MultiStepForm/MultiStepForm";
import useGetProfile from "../features/profile/hooks/useGetProfile";
import { useAuth } from "../context/AuthProvider";
function MiltiStepForm() {
  const { userData } = useAuth();
  if (!userData) return;
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 pb-28 sm:px-6 lg:px-8">
      <MultiStepForm user={userData} />
    </div>
  );
}

export default MiltiStepForm;
