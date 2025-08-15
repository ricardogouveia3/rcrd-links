import { useState } from 'react';

const Npx = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('npx rcrd');
      setCopied(true);

      // Hide after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section className="text-center bg-quartz-150 overflow-hidden">
      <button
        type="button"
        className="relative inline-block p-6 w-full text-sm sm:text-xl transition-all md:text-2xl text-white hover:scale-110 cursor-pointer bg-transparent border-none"
        onClick={handleCopy}
      >
        <code>npx rcrd</code>
        {copied && (
          <div className="absolute left-0 right-0 top-1/4 h-1/2 flex justify-center items-center bg-quartz-l50">
            <span className="text-xs text-quartz font-bold">Copied to clipboard</span>
          </div>
        )}
      </button>
    </section>
  );
};

export default Npx;
