
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import StoreProvider from "./redux/StoreProvider";

export const metadata = {
  title: "Admin Dashboard Next js",
  description: "Basic Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Sidebar />
          <div className="ml-[15%]">
            <Navbar />
            <main>{children}</main>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
