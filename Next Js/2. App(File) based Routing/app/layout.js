import Navbar from "./component/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* Show Navbar on top of every page */}
        {children}
      </body>
    </html>
  );
}
