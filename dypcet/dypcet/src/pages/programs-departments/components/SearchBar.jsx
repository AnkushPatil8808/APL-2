import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const SearchBar = ({ onSearch, onFilterToggle, resultsCount }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e?.preventDefault();
    onSearch(searchQuery);
  };

  const handleInputChange = (e) => {
    const value = e?.target?.value;
    setSearchQuery(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setSearchQuery('');
    onSearch('');
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-brand">
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Input
              type="search"
              placeholder="Search programs, departments, or specializations..."
              value={searchQuery}
              onChange={handleInputChange}
              className="pl-10"
            />
            <Icon 
              name="Search" 
              size={20} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
            />
            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-gray-100"
              >
                <Icon name="X" size={16} className="text-muted-foreground" />
              </button>
            )}
          </div>
          
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={onFilterToggle}
              className="lg:hidden"
            >
              <Icon name="Filter" size={16} className="mr-2" />
              Filters
            </Button>
            
            <Button type="submit" variant="default">
              <Icon name="Search" size={16} className="mr-2" />
              Search
            </Button>
          </div>
        </div>

        {/* Quick Search Tags */}
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-muted-foreground">Popular searches:</span>
          {['Computer Science', 'AI & ML', 'Mechanical', 'Civil', 'Electronics']?.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => {
                setSearchQuery(tag);
                onSearch(tag);
              }}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Count */}
        {resultsCount !== null && (
          <div className="flex items-center justify-between pt-2 border-t border-gray-200">
            <span className="text-sm text-muted-foreground">
              {resultsCount} program{resultsCount !== 1 ? 's' : ''} found
              {searchQuery && ` for "${searchQuery}"`}
            </span>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <select className="text-sm border border-gray-200 rounded-md px-3 py-1 bg-white">
                <option value="relevance">Relevance</option>
                <option value="name">Program Name</option>
                <option value="duration">Duration</option>
                <option value="fees">Fees (Low to High)</option>
                <option value="popularity">Popularity</option>
              </select>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;