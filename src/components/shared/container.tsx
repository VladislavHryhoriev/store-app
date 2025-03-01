const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative mx-auto max-w-[1400px] px-4">{children}</div>;
};

export default Container;
