import React from 'react';
import { mobileExperienceData } from '@/data';
import Image from 'next/image';

const MobileExperience: React.FC = () => {

  const getThemeClasses = (theme: string) => {
    const themes = {
      red: {
        card: 'border-red-200 ',
        icon: 'text-red-600',
        title: 'text-red-900',
        statistic: 'text-red-600',
        description: 'bg-red-100 text-red-800'
      },
      orange: {
        card: 'border-orange-200 ',
        icon: 'text-orange-600',
        title: 'text-orange-900',
        statistic: 'text-orange-600',
        description: 'bg-orange-100 text-orange-800'
      },
      purple: {
        card: 'border-purple-200 ',
        icon: 'text-purple-600',
        title: 'text-purple-900',
        statistic: 'text-purple-600',
        description: 'bg-purple-100 text-purple-800'
      },
      green: {
        card: 'border-green-200 ',
        icon: 'text-green-600',
        title: 'text-green-900',
        statistic: 'text-green-600',
        description: 'bg-green-100 text-green-800'
      }
    };
    return themes[theme as keyof typeof themes];
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Critical Business Impact Banner */}
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6 font-sans">
            <span className="w-2 h-2 bg-red-600 rounded-full"></span>
            {mobileExperienceData.banner.text}
          </div>
          
          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 font-sans">
            <span className="text-blue-900">{mobileExperienceData.title.part1}</span>{' '}
            <span className="text-red-600">{mobileExperienceData.title.part2}</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
            {mobileExperienceData.subtitle}
          </p>
        </div>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {mobileExperienceData.cards.map((card) => {
            const themeClasses = getThemeClasses(card.theme);
            
            return (
              <div
                key={card.id}
                className={`rounded-2xl border-2 ${themeClasses.card} p-8 hover:shadow-lg transition-all duration-300`}
              >
                {/* Icon and Title */}
                <div className="flex items-center gap-2 mb-6 justify-between">
                  <div className={`text-2xl ${themeClasses.description} border-2 rounded-sm p-2`}>
                    <Image src={card.icon} alt={card.title} width={14} height={14} className="w-12 h-12 object-contain" />
                  </div>
                  <div>
                   
                    <div className={`text-2xl font-bold ${themeClasses.statistic} mb-2 font-sans text-right`}>
                     {card.statistic}
                   </div>
                   <p className="text-gray-600 text-sm font-medium font-sans text-right">
                     {card.statisticLabel}
                   </p>
                  
                  </div>
                </div>

                {/* Statistic */}
                <div className="mb-6">
                  <div className={`text-5xl font-bold ${themeClasses.statistic} mb-2 font-sans`}>
                  <h3 className={`text-xl font-bold ${themeClasses.title} mb-1 font-sans`}>
                      {card.title}
                    </h3>
                  </div>
                 
                  <p className="text-gray-600 text-sm font-sans">
                      {card.subtitle}
                    </p>
                </div>

                {/* Description */}
                <div className={`rounded-lg p-4 ${themeClasses.description}`}>
                  <p className="text-sm leading-relaxed font-sans">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MobileExperience;
