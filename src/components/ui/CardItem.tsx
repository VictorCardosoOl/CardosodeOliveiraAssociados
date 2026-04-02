import { ArrowRight } from "lucide-react";

export interface CardItemProps {
  item: any;
  onClick: () => void;
  className?: string;
}

export const CardItem = ({ item, onClick, className }: CardItemProps) => {
  const isDark = item.theme === 'dark';
  
  return (
    <div 
      onClick={onClick} 
      className={`group cursor-pointer flex flex-col justify-between p-8 md:p-12 min-h-[400px] md:min-h-[480px] border transition-transform duration-500 hover:scale-[0.98] ${
        isDark ? 'bg-primary text-secondary border-primary' : 'bg-secondary text-primary border-primary/10'
      } ${className || ''}`}
    >
      {/* Tags */}
      <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
        {item.tags.map((tag: string, i: number) => (
          <span 
            key={i} 
            className={`micro-text px-4 py-2 border ${
              isDark ? 'border-secondary/20 text-secondary/80' : 'border-primary/20 text-primary/70'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="mt-auto mb-8 md:mb-12">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-editorial uppercase tracking-tighter leading-[0.9] mb-4 md:mb-6">
           {item.title}
        </h3>
        <p className={`micro-text normal-case tracking-normal leading-relaxed max-w-md lg:max-w-lg 2xl:max-w-xl ${isDark ? 'text-secondary/70' : 'text-muted'}`}>
          {item.subtitle}
        </p>
      </div>

      {/* Arrow Button */}
      <div className="flex justify-end">
        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${
          isDark ? 'bg-secondary text-primary' : 'bg-primary text-secondary'
        }`}>
          <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1} />
        </div>
      </div>
    </div>
  );
};
