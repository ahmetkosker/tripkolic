interface DetailItemProps {
  label: string;
  value: string;
}

export default function DetailItem({ label, value }: DetailItemProps) {
  return (
    <div className="justify-start items-start flex gap-x-2 sm:gap-4">
      <div className="text-sm sm:text-base text-black font-medium">{label}</div>
      <div className="text-sm sm:text-base text-gray-800">{value}</div>
    </div>
  );
} 