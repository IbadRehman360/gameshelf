import { useNavigate } from "react-router-dom";

export function decimalConversion(price) {
    return price.toFixed(2);
}
export function useMoveBack() {
    const navigate = useNavigate();
    return () => navigate(-1);
}

