import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "./../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import SpinnerMini from "./../../ui/SpinnerMini";

const Logout = () => {
  const { isLoading, logout } = useLogout();
  const handleLogout = () => {};

  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
};

export default Logout;
