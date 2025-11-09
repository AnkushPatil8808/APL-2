import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-brand p-6 hover-lift">
      <div className="flex items-start space-x-4 mb-4">
        <div className="relative">
          <Image
            src={testimonial?.avatar}
            alt={testimonial?.avatarAlt}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
            <Icon name="Quote" size={12} className="text-white" />
          </div>
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-foreground">{testimonial?.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial?.program}</p>
          <p className="text-xs text-muted-foreground">{testimonial?.year}</p>
        </div>
        <div className="flex items-center">
          {[...Array(5)]?.map((_, i) => (
            <Icon
              key={i}
              name="Star"
              size={16}
              className={i < testimonial?.rating ? 'text-accent fill-current' : 'text-muted'}
            />
          ))}
        </div>
      </div>
      <blockquote className="text-muted-foreground italic mb-4">
        "{testimonial?.content}"
      </blockquote>
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center text-muted-foreground">
          <Icon name="MapPin" size={14} className="mr-1" />
          {testimonial?.location}
        </div>
        <div className="flex items-center text-muted-foreground">
          <Icon name="Calendar" size={14} className="mr-1" />
          {testimonial?.date}
        </div>
      </div>
      {testimonial?.achievements && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {testimonial?.achievements?.map((achievement, index) => (
              <span key={index} className="bg-success/10 text-success px-2 py-1 rounded text-xs">
                {achievement}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;