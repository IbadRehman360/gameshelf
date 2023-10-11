import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RenderInfo(label, value, icon, iconColor) {
  return (
    <div className="my-1 flex w-auto items-center rounded-lg bg-gray-100 px-3 py-2 text-gray-700 shadow-md sm:mb-0">
      <FontAwesomeIcon icon={icon} className={`mr-2 ${iconColor}`} />
      <span className="font-semibold">{label}</span>
      <span className="ml-2">: {value}</span>
    </div>
  );
}

export default RenderInfo;
