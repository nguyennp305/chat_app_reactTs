import { PropsWithChildren, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Socket } from "socket.io-client";
import { AuthenticatedRoute } from "./components/AuthenticatedRoute";
import { ConversationChannelPage } from "./pages/conversations/ConversationChannelPage";
import { ConversationPage } from "./pages/conversations/ConversationPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { AuthContext } from "./utils/context/AuthContext";
import { socket, SocketContext } from "./utils/context/SocketContext";
import { User } from "./utils/types";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import { enableMapSet } from "immer";
import { GroupChannelPage } from "./pages/group/GroupChannelPage";
import { GroupPage } from "./pages/group/GroupPage";
import { AppPage } from "./pages/AppPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ConversationPageGuard } from "./guards/ConversationPageGuard";
import { GroupPageGuard } from "./guards/GroupPageGuard";
import { FriendsLayoutPage } from "./pages/friends/FriendsLayoutPage";
import { FriendRequestPage } from "./pages/friends/FriendRequestPage";
import { SettingsPage } from "./pages/settings/SettingsPage";
import { SettingsProfilePage } from "./pages/settings/SettingsProfilePage";
import { SettingsAppearancePage } from "./pages/settings/SettingsAppearancePage";
import { CallsPage } from "./pages/calls/CallsPage";
import { CurrentCallPage } from "./pages/calls/CurrentCallPage";
import { Test } from "./pages/test/Test";
import { WelcomePage } from "./pages/WelcomePage";
import { HeaderAllPages } from "./components/headers-al-pages/HeaderAllPages";
import { PlatformPage } from "./pages/platform-page/home-page/PlatformPage";

enableMapSet();

type Props = {
  user?: User;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  socket: Socket;
};

function AppWithProviders({
  children,
  user,
  setUser,
}: PropsWithChildren & Props) {
  return (
    <ReduxProvider store={store}>
      <AuthContext.Provider value={{ user, updateAuthUser: setUser }}>
        <SocketContext.Provider value={socket}>
          {children}
        </SocketContext.Provider>
      </AuthContext.Provider>
    </ReduxProvider>
  );
}

function App() {
  const [user, setUser] = useState<User>();
  return (
    <AppWithProviders user={user} setUser={setUser} socket={socket}>
      {/* <HeaderAllPages /> */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/welcomePage" element={<WelcomePage />} />
        {/* page home */}
        <Route path="/" element={<AuthenticatedRoute children={<PlatformPage />} />} />
        {/* pages messages */}
        <Route path="/messages" element={<AuthenticatedRoute children={<AppPage />} />}>
          {/* <Route path='/' element={<PlatformPage />} /> */}
          <Route path="conversations" element={<ConversationPage />}>
            <Route
              path=":id"
              element={
                <ConversationPageGuard children={<ConversationChannelPage />} />
              }
            />
          </Route>
          <Route path="groups" element={<GroupPage />}>
            <Route
              path=":id"
              element={<GroupPageGuard children={<GroupChannelPage />} />}
            />
          </Route>
          <Route path="friends" element={<FriendsLayoutPage />}>
            <Route path="requests" element={<FriendRequestPage />} />
            <Route path="blocked" element={<div>Blocked</div>} />
          </Route>
          <Route path="settings" element={<SettingsPage />}>
            <Route path="profile" element={<SettingsProfilePage />} />
            <Route path="appearance" element={<SettingsAppearancePage />} />
          </Route>
          <Route path="calls" element={<CallsPage />}>
            <Route path="current" element={<CurrentCallPage />} />
          </Route>
        </Route>
        {/* page test */}
        <Route path="/test" element={<Test />} />
      </Routes>
      <ToastContainer theme="dark" />
    </AppWithProviders>
  );
}

export default App;
