export default function CmsLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <header style={{ background: '#eee', padding: '1rem' }}>
            <h1>School CMS</h1>
          </header>
          <main>{children}</main>
        </body>
      </html>
    );
  }
  