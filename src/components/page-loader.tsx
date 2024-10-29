import Image from 'next/image'

export const PageLoader = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <Image
        src="/spinner.gif"
        alt="Loading..."
        width={100}
        height={100}
        style={{ width: 100, height: 100 }}
        priority
      />
    </div>
  );
};