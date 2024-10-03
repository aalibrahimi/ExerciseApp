// src/app/layout.js
import '@/styles/globals.css';
import Sidebar from '@/components/Sidebar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-4">
            {children}
            <p>hello</p>
          </main>
        </div>
      </body>
    </html>
  );
}