import "./globals.css";
import { Analytics } from '@vercel/analytics/next';


export const metadata = {
  title: "AISPIRE - AI Student Innovation & Research Club",
  description: "Join AISPIRE, the premier AI/ML student club. Learn, collaborate and innovate with hands-on projects, workshops, and a community of AI enthusiasts.",
  keywords: ["AI club", "machine learning", "student innovation", "AI research", "tech community", "AISPIRE", "artificial intelligence"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
