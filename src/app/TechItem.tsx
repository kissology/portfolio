export const TechItem = ({
  name,
  icon,
}: {
  name: string;
  icon: React.ReactNode;
}) => (
  <div className="flex flex-col items-center justify-center space-y-2">
    {icon}
    <span className="text-sm">{name}</span>
  </div>
);
