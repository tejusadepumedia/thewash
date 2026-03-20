export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] py-8 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/20 text-xs tracking-wider">
          © {new Date().getFullYear()} thewash. All Rights Reserved.
        </p>
        <p className="text-white/20 text-xs tracking-wider">
          Northern Virginia · 571-752-2785
        </p>
      </div>
    </footer>
  );
}