interface EventType {
  title: string;
  organization?: string;
  description?: string;
  date?: string;
  showLine?: boolean;
}

const Event = ({
  title,
  organization,
  description,
  date,
  showLine = true,
}: EventType) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 p-2 rounded-full bg-gray-400 mb-4">
        <p>{date}</p>
      </div>
      <p className="text-xl">{title}</p>
      <p className="text-lg">{organization}</p>
      <p className="text-md md:max-w-sm">{description}</p>
      {showLine && (
        <span className="h-16 w-1 my-8 bg-white bottom-0 rounded-full" />
      )}
    </div>
  );
};

export default Event;
