export default function WebLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <header>Public Website Navbar</header>
          <main>{children}</main>
          <footer>© School Website</footer>
        </body>
      </html>
    );
  }
  