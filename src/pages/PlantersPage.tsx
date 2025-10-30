import { Search } from 'lucide-react';
import { useState } from 'react';

interface PlantersPageProps {
  onNavigate: (page: string, id?: string) => void;
}

export default function PlantersPage({ onNavigate }: PlantersPageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const planters = [
    {
      id: '1',
      name: 'Kahui Project',
      type: 'Community/Organisation',
      verified: true,
      location: 'Borneo, Indonesia',
      joinedDate: '2 years, 1 month ago',
      treesPlanted: 7224,
      nftSold: 5708,
      planters: 112,
      nftForSale: 1516,
    },
    {
      id: '2',
      name: 'Pilang Village',
      type: 'Community/Organisation',
      verified: true,
      location: 'Borneo, Indonesia',
      joinedDate: '2 years, 1 month ago',
      treesPlanted: 2457,
      nftSold: 2317,
      planters: 11,
      nftForSale: 140,
    },
    {
      id: '3',
      name: 'Petronella',
      type: 'Community/Organisation',
      verified: true,
      location: 'Papua, Indonesia',
      joinedDate: '6 months ago',
      treesPlanted: 2457,
      nftSold: 2317,
      planters: 11,
      nftForSale: 140,
    },
    {
      id: '4',
      name: 'Sungai Udang',
      type: 'Community/Organisation',
      verified: true,
      location: 'Borneo, Indonesia',
      joinedDate: '6 months ago',
      treesPlanted: 2457,
      nftSold: 2317,
      planters: 11,
      nftForSale: 140,
    },
    {
      id: '5',
      name: 'HIRAI',
      type: 'Community/Organisation',
      verified: true,
      location: 'Borneo, Indonesia',
      joinedDate: '2 years, 1 month ago',
      treesPlanted: 2457,
      nftSold: 2317,
      planters: 11,
      nftForSale: 140,
    },
    {
      id: '6',
      name: 'Gunung Karasik',
      type: 'Community/Organisation',
      verified: true,
      location: 'Borneo, Indonesia',
      joinedDate: '6 months ago',
      treesPlanted: 2457,
      nftSold: 2317,
      planters: 11,
      nftForSale: 140,
    },
    {
      id: '7',
      name: 'Kujan Village',
      type: 'Community/Organisation',
      verified: true,
      location: 'Borneo, Indonesia',
      joinedDate: '2 years, 1 month ago',
      treesPlanted: 2457,
      nftSold: 2317,
      planters: 11,
      nftForSale: 140,
    },
    {
      id: '8',
      name: 'Greenmade Kenya',
      type: 'Community/Organisation',
      verified: true,
      location: 'Kenya',
      joinedDate: '6 months ago',
      treesPlanted: 2457,
      nftSold: 2317,
      planters: 11,
      nftForSale: 140,
    },
    {
      id: '9',
      name: 'Bula Garden',
      type: 'Community/Organisation',
      verified: true,
      location: 'Tanzania',
      joinedDate: '2 years, 1 month ago',
      treesPlanted: 2457,
      nftSold: 2317,
      planters: 11,
      nftForSale: 140,
    },
    {
      id: '10',
      name: 'Jagak Himbak',
      type: 'Community/Organisation',
      verified: true,
      location: 'Borneo, Indonesia',
      joinedDate: '6 months ago',
      treesPlanted: 2457,
      nftSold: 2317,
      planters: 11,
      nftForSale: 140,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in-up">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Planters</h1>
          <div className="flex items-center space-x-4">
            <button className="px-6 py-2 rounded-full text-sm font-medium bg-teal-600 text-white">
              All
            </button>
            <div className="relative w-64 hidden md:block">
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
        </div>

        <div className="relative w-full md:hidden mb-6">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in-right">
          {planters.map((planter) => (
            <div
              key={planter.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300 cursor-pointer animate-slide-in-up group "
              onClick={() => onNavigate('planter-detail', planter.id)}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-black rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300"></div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900">{planter.name}</h3>
                  <p className="text-sm text-gray-600">{planter.type}</p>
                  <div className="flex items-center space-x-2 mt-2 text-xs text-gray-500">
                    {planter.verified && (
                      <>
                        <span className="text-teal-600 font-medium">Verified</span>
                        <span>•</span>
                      </>
                    )}
                    <span>{planter.location}</span>
                    <span>•</span>
                    <span>Joined {planter.joinedDate}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-3 group-hover:bg-teal-100 group-hover:border-teal-400 transition-colors duration-200">
                  <div className="text-xs text-gray-600 mb-1">Trees Planted</div>
                  <div className="text-xl font-bold text-teal-700">
                    {planter.treesPlanted.toLocaleString()}
                  </div>
                </div>
                <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-3 group-hover:bg-teal-100 group-hover:border-teal-400 transition-colors duration-200">
                  <div className="text-xs text-gray-600 mb-1">Planters</div>
                  <div className="text-xl font-bold text-teal-700">
                    {planter.planters}
                  </div>
                </div>
                <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-3 group-hover:bg-teal-100 group-hover:border-teal-400 transition-colors duration-200">
                  <div className="text-xs text-gray-600 mb-1">NFT sold</div>
                  <div className="text-xl font-bold text-teal-700">
                    {planter.nftSold.toLocaleString()}
                  </div>
                </div>
                <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-3 group-hover:bg-teal-100 group-hover:border-teal-400 transition-colors duration-200">
                  <div className="text-xs text-gray-600 mb-1">NFT for sale</div>
                  <div className="text-xl font-bold text-teal-700">
                    {planter.nftForSale.toLocaleString()}
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
