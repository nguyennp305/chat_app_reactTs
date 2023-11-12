import { Outlet } from "react-router-dom";
import { UserSidebar } from "../../../components/sidebars/UserSidebar";
import { LayoutPage } from "../../../utils/styles";

export const MessageChatPage = () => {
  return (
    <LayoutPage>
        <div>mnguen</div>
      <UserSidebar />
      <Outlet />
    </LayoutPage>
  );
};
