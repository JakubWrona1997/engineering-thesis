import React, { ReactNode, useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import DocumentNavBar from "../../ui-components/DocumentNavBar";

interface LayoutProps {
  children: ReactNode;
}

interface User {
  username: string;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        setUser({ username: currentUser.getUsername() });
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <DocumentNavBar
        username={user?.username}
        width={"100%"}
        height={"100%"}
      />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
