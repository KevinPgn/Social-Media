import { Plus } from "lucide-react"

const storiesData = [
  { color: 'bg-green-700', name: 'Add a Story', isFirst: true },
  { color: 'bg-blue-700', name: 'Oscar' },
  { color: 'bg-red-700', name: 'Rebecca' },
  { color: 'bg-yellow-700', name: 'Harold' },
  { color: 'bg-purple-700', name: 'Anna' },
  { color: 'bg-pink-700', name: 'Garrett' },
];

const StoryItem = ({ color, name, isFirst }: { color: string, name: string, isFirst?: boolean }) => {
  return (
    <div className="flex flex-col justify-between w-full items-center mx-2">
      <div className={`w-[80px] h-[80px] rounded-full ${color} flex items-center justify-center`}>
        {isFirst && <Plus size={35} className="text-white cursor-pointer" />}
      </div>
      <div className="mt-2 text-sm text-center">{name}</div>
    </div>
  );
};

export const Stories = () => {
  return (
    <div className="flex justify-center bg-[#1b1a1a] items-center p-4 rounded-lg">
      {storiesData.map((story, index) => (
        <StoryItem key={index} color={story.color} name={story.name} isFirst={story.isFirst} />
      ))}
    </div>
  );
};