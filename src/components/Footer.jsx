import { FiGithub, FiLinkedin, FiHeart } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} Arun Rai. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Arunrai0752"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-neutral-400 hover:text-neutral-600 dark:hover:text-white transition-colors"
          >
            <FiGithub className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/arun-fullstack/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-neutral-400 hover:text-blue-600 transition-colors"
          >
            <FiLinkedin className="w-4 h-4" />
          </a>
        </div>
        <p className="text-sm text-neutral-400 flex items-center gap-1">
          Built with <FiHeart className="w-3.5 h-3.5 text-red-500" /> by Arun Rai
        </p>
      </div>
    </footer>
  );
}