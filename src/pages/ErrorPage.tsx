import { useEffect, type FC } from "react";
import { useNavigate } from "react-router";

const ErrorPage: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return <></>;
};

export default ErrorPage;
