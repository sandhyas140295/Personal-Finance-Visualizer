

import '../styles/globals.css';

export const metadata = {
  title: "Personal Finance Visualizer",
  description: "Manage your budget and expenses easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container mx-auto p-4">
          <header>
            <h1 className="text-3xl font-bold">Personal Finance Visualizer</h1>
          </header>
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
