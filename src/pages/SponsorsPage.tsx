import { Search } from 'lucide-react';
import { useState } from 'react';

interface SponsorsPageProps {
  onNavigate: (page: string, id?: string) => void;
}

export default function SponsorsPage({ onNavigate }: SponsorsPageProps) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const sponsors = [
    {
      id: '1',
      name: 'Grow LTD',
      type: 'Company',
      sponsorLevel: 'Gold sponsor',
      location: 'London, England',
      joinedDate: '11 months ago',
      sponsoredTreeValue: 393866,
      nftOwned: 211756,
      carbonValue: 171477,
      nftSold: 7520,
    },
    ...Array(9).fill(null).map((_, i) => ({
      id: `${i + 2}`,
      name: 'Grow LTD',
      type: 'Company',
      sponsorLevel: 'Gold sponsor',
      location: 'London, England',
      joinedDate: '11 months ago',
      sponsoredTreeValue: 1394,
      nftOwned: 1114,
      carbonValue: 224,
      nftSold: 358,
    })),
  ];

  const filters = ['All', 'Company', 'Individual'];

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in-up">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Sponsors</h1>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 mb-8">
          <div className="flex space-x-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-teal-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-teal-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in-right">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer animate-slide-in-up group"
              onClick={() => onNavigate('sponsor-detail', sponsor.id)}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-black rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300"></div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900">{sponsor.name}</h3>
                  <p className="text-sm text-gray-600">{sponsor.type}</p>
                  <div className="flex items-center space-x-2 mt-2 text-xs text-gray-500">
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium">
                      {sponsor.sponsorLevel}
                    </span>
                    <span>•</span>
                    <span>{sponsor.location}</span>
                    <span>•</span>
                    <span>Joined {sponsor.joinedDate}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-3 group-hover:bg-teal-100 group-hover:border-teal-400 transition-colors duration-200">
                  <div className="text-xs text-gray-600 mb-1">Sponsored tree value</div>
                  <div className="text-xl font-bold text-teal-700">
                    ${sponsor.sponsoredTreeValue.toLocaleString()}
                  </div>
                </div>
                <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-3 group-hover:bg-teal-100 group-hover:border-teal-400 transition-colors duration-200">
                  <div className="text-xs text-gray-600 mb-1">Carbon value</div>
                  <div className="text-xl font-bold text-teal-700">
                    ${sponsor.carbonValue.toLocaleString()}
                  </div>
                </div>
                <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-3 group-hover:bg-teal-100 group-hover:border-teal-400 transition-colors duration-200">
                  <div className="text-xs text-gray-600 mb-1">NFT owned</div>
                  <div className="text-xl font-bold text-teal-700">
                    {sponsor.nftOwned.toLocaleString()}
                  </div>
                </div>
                <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-3 group-hover:bg-teal-100 group-hover:border-teal-400 transition-colors duration-200">
                  <div className="text-xs text-gray-600 mb-1">NFT sold</div>
                  <div className="text-xl font-bold text-teal-700">
                    {sponsor.nftSold.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
