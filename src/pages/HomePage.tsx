import { ArrowRight, TreePine } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string, id?: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const topPlantersCompany = [
    { rank: 1, name: 'Grow UTD', type: 'Company', trees: 211756, percentage: 45 },
    { rank: 1, name: 'Grow UTD', type: 'Company', trees: 211756, percentage: 45 },
    { rank: 1, name: 'Grow UTD', type: 'Company', trees: 211756, percentage: 45 },
    { rank: 1, name: 'Grow UTD', type: 'Company', trees: 211756, percentage: 45 },
  ];

  const topPlantersCommunity = [
    { rank: 1, name: 'Kahui', type: 'Community/Organisation', trees: 211756, percentage: 45 },
    { rank: 1, name: 'Sungai Udang', type: 'Community/Organisation', trees: 211756, percentage: 45 },
    { rank: 1, name: 'Petronella', type: 'Community/Organisation', trees: 211756, percentage: 45 },
    { rank: 1, name: 'Pilang', type: 'Community/Organisation', trees: 211756, percentage: 45 },
  ];

  const nfts = [
    {
      id: '1034',
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      botanicalName: 'Botanical Name',
      commonName: 'Common Name',
      carbonBiomass: 0.0,
      carbonValue: 0.0,
      uid: '#1034',
      price: 0,
    },
    {
      id: '1035',
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      botanicalName: 'Botanical Name',
      commonName: 'Common Name',
      carbonBiomass: 0.0,
      carbonValue: 0.0,
      uid: '#1034',
      price: 0,
    },
    {
      id: '1036',
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      botanicalName: 'Botanical Name',
      commonName: 'Common Name',
      carbonBiomass: 0.0,
      carbonValue: 0.0,
      uid: '#1034',
      price: 0,
    },
    {
      id: '1037',
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      botanicalName: 'Botanical Name',
      commonName: 'Common Name',
      carbonBiomass: 0.0,
      carbonValue: 0.0,
      uid: '#1034',
      price: 0,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden mx-4 mt-8 md:mx-8 animate-zoom-in">
        <img
          src="https://images.pexels.com/photos/2833391/pexels-photo-2833391.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Indigenous person"
          className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent animate-fade-in-right">
          <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center animate-slide-in-down">
            <div className="text-white max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg animate-fade-in-up">
                Better Outcomes For Climate, Biodiversity And People
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in-up">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm mb-12 animate-fade-in">
          <div className="flex items-center space-x-3 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Today's Carbon</h2>
            <TreePine className="w-8 h-8 text-gray-900" />
          </div>
          <p className="text-sm text-gray-600 mb-4">Portfolio Biomass Increase</p>
          <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">$1,345,627</div>

          <div className="relative h-64 md:h-80 animate-zoom-in">
            <svg className="w-full h-full" viewBox="0 0 800 300" preserveAspectRatio="none">
              <defs>
                <linearGradient id="carbonGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#5eead4" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#5eead4" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#5eead4" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <path
                d="M 0 280 Q 200 250 400 200 T 800 120 L 800 300 L 0 300 Z"
                fill="url(#carbonGradient)"
              />
              <path
                d="M 0 280 Q 200 250 400 200 T 800 120"
                stroke="#14b8a6"
                strokeWidth="3"
                fill="none"
              />
            </svg>
            <div className="absolute bottom-0 left-0 text-xs text-gray-500">
              Age (Years, Months, Days)
            </div>
            <div className="absolute top-4 right-4 text-xs text-gray-600 space-y-1">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                <span>Carbon Sequestered (Kg)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-teal-300 rounded-full"></div>
                <span>Carbon Biomass (Kg)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Top Planters</h2>
            <button className="px-6 py-2 text-sm font-medium text-teal-600 border-2 border-teal-600 rounded-full hover:bg-teal-50 transition-colors">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in-right">
            <div className="space-y-4">
              {topPlantersCompany.map((planter, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-between animate-slide-in-up"
                >
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="text-2xl font-bold text-gray-900 w-8">{planter.rank}</div>
                    <div className="w-12 h-12 bg-black rounded-full flex-shrink-0"></div>
                    <div>
                      <div className="font-bold text-gray-900">{planter.name}</div>
                      <div className="text-sm text-gray-600">{planter.type}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-bold text-gray-900">{planter.trees.toLocaleString()}</div>
                      <div className="text-xs text-gray-600">Trees Planted</div>
                    </div>
                    <div className="bg-teal-100 text-teal-700 px-4 py-2 rounded-xl font-bold text-lg">
                      {planter.percentage}%
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {topPlantersCommunity.map((planter, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-between animate-slide-in-up"
                >
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="text-2xl font-bold text-gray-900 w-8">{planter.rank}</div>
                    <div className="w-12 h-12 bg-black rounded-full flex-shrink-0"></div>
                    <div>
                      <div className="font-bold text-gray-900">{planter.name}</div>
                      <div className="text-sm text-gray-600">{planter.type}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-bold text-gray-900">{planter.trees.toLocaleString()}</div>
                      <div className="text-xs text-gray-600">Trees Planted</div>
                    </div>
                    <div className="bg-teal-100 text-teal-700 px-4 py-2 rounded-xl font-bold text-lg">
                      {planter.percentage}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">NFTs For Sale</h2>
            <button className="px-6 py-2 text-sm font-medium text-teal-600 border-2 border-teal-600 rounded-full hover:bg-teal-50 transition-colors">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
            {nfts.map((nft) => (
              <div
                key={nft.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.06] transition-all duration-500 cursor-pointer animate-slide-in-up group"
                onClick={() => onNavigate('marketplace', nft.id)}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={nft.image}
                    alt={nft.commonName}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out group-hover:brightness-95"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{nft.botanicalName}</h3>
                  <p className="text-sm text-gray-600 mb-3">{nft.commonName}</p>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                    <div>
                      <div className="text-gray-600">Carbon Biomass</div>
                      <div className="font-semibold text-gray-900">{nft.carbonBiomass.toFixed(2)}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Carbon Value</div>
                      <div className="font-semibold text-gray-900">{nft.carbonValue.toFixed(2)}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                    <div className="text-sm font-semibold text-gray-900">{nft.uid}</div>
                    <div className="text-sm font-bold text-gray-900">XXX USD</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
