import { useNavigate } from "react-router";

const useNavigationBar = () => {
  const navigate = useNavigate();

  return {
    onHomeButtonClicked: () => navigate('/home'),
    onSosButtonClicked: () => navigate('/emergency-report'),
  };
}

export default useNavigationBar;