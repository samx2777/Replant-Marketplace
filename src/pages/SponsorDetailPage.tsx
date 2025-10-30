import { ChevronLeft, ChevronRight, Share2, TreePine } from 'lucide-react';
import { useState } from 'react';

interface SponsorDetailPageProps {
  onNavigate: (page: string, id?: string) => void;
}

export default function SponsorDetailPage({ onNavigate }: SponsorDetailPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nftImages = [
    'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
  ];

  const collectionNFTs = Array(4).fill(null).map((_, i) => ({
    id: `nft-${i}`,
    image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
  }));

  const speciesMix = [
    { name: 'Lorem ipsum', percentage: 0.02, color: 'bg-pink-400' },
    { name: 'Lorem ipsum', percentage: 0.02, color: 'bg-teal-400' },
    { name: 'Lorem ipsum', percentage: 0.02, color: 'bg-purple-400' },
    { name: 'Lorem ipsum', percentage: 0.02, color: 'bg-blue-400' },
    { name: 'Lorem ipsum', percentage: 0.02, color: 'bg-green-400' },
    { name: 'Lorem ipsum', percentage: 0.02, color: 'bg-red-400' },
    { name: 'Lorem ipsum', percentage: 0.02, color: 'bg-orange-400' },
  ];

  const iucnStatus = [
    { label: 'Critically Endangered', percentage: 12, color: 'bg-pink-400' },
    { label: 'Endangered', percentage: 22, color: 'bg-teal-500' },
    { label: 'Vulnerable', percentage: 0.04, color: 'bg-yellow-400' },
    { label: 'Data Deficient', percentage: 0.86, color: 'bg-orange-400' },
    { label: 'Least Concern', percentage: 58, color: 'bg-green-400' },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % nftImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + nftImages.length) % nftImages.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in-up">
        <div className="flex items-center space-x-4 mb-8 animate-slide-in-down">
          <div className="w-20 h-20 bg-black rounded-full animate-pulse"></div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Grow LTD</h1>
                <p className="text-gray-600">Company or Individual</p>
              </div>
              <div className="bg-teal-100 text-teal-700 px-6 py-3 rounded-2xl">
                <div className="text-2xl font-bold">211,756</div>
                <div className="text-sm">Trees Planted</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 mb-8 animate-fade-in animate-zoom-in">
          <h2 className="font-bold text-gray-900 mb-2">Growing Since {'{DATE}'}</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
            quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
            consequat, vel illum dolore eu feugiat nulla facilisis at vero eros
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="bg-white rounded-2xl p-6 relative animate-zoom-in animate-fade-in">
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 relative">
                <img
                  src={nftImages[currentImageIndex]}
                  alt="NFT"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-900" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-gray-900" />
                </button>
              </div>
              <button className="flex items-center space-x-2 text-gray-700 hover:text-teal-600 transition-colors animate-pulse">
                <Share2 className="w-5 h-5" />
                <span className="text-sm font-medium">Share</span>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 animate-fade-in-up animate-zoom-in">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-bold text-gray-900 mb-1">Botanical Name</div>
                  <div className="text-gray-600">Shorea Balangeran</div>
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Common Name</div>
                  <div className="text-gray-600">Balangeran</div>
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">IUCN Status</div>
                  <div className="text-gray-600">Vulnerable</div>
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Native / Non Native</div>
                  <div className="text-gray-600">Native</div>
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Country</div>
                  <div className="text-gray-600">Indonesia</div>
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Location</div>
                  <div className="text-gray-600 text-xs">-1.9655674, 115.280239</div>
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Capture Date</div>
                  <div className="text-gray-600">25-03-23</div>
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Sponsored by</div>
                  <div className="text-gray-600">Heveya</div>
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">NFT Collection</div>
                  <div className="text-gray-600 text-xs">SOLaB35cv35kl67</div>
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">NFT ID</div>
                  <div className="text-gray-600">#28096</div>
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Planting Organisation/Community</div>
                  <div className="text-gray-600">Kahui Project</div>
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Planting Cost</div>
                  <div className="text-gray-600">$1.50</div>
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Carbon Value</div>
                  <div className="text-gray-600">$0.25</div>
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Today's Value</div>
                  <div className="text-teal-600 font-bold">$1.75</div>
                </div>
              </div>
            </div>

            <button className="w-full bg-teal-600 text-white py-3 rounded-xl font-medium hover:bg-teal-700 hover:scale-105 transition-all animate-pulse">View All</button>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm mb-12 animate-fade-in animate-zoom-in">
          <div className="flex items-center space-x-3 mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Today's Carbon</h2>
            <TreePine className="w-7 h-7 text-gray-900" />
          </div>
          <p className="text-sm text-gray-600 mb-2">NFT Biomass</p>
          <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
            <div>
              <div className="text-gray-600">Carbon Biomass</div>
              <div className="font-semibold text-gray-900">0.00 (KG)</div>
            </div>
            <div>
              <div className="text-gray-600">Carbon Value</div>
              <div className="font-semibold text-gray-900">0.00 (USD)</div>
            </div>
          </div>

          <div className="relative h-64 animate-fade-in animate-zoom-in">
            <svg className="w-full h-full" viewBox="0 0 800 250" preserveAspectRatio="none">
              <defs>
                <linearGradient id="carbonGradientDetail" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#5eead4" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#5eead4" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#5eead4" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <path
                d="M 0 230 Q 200 200 400 150 T 800 80 L 800 250 L 0 250 Z"
                fill="url(#carbonGradientDetail)"
              />
              <path
                d="M 0 230 Q 200 200 400 150 T 800 80"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-fade-in-up">
          <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 animate-zoom-in hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-200">
            <div className="text-sm text-gray-600 mb-2">NFT's Owned</div>
            <div className="text-3xl font-bold text-gray-900">211,756</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 animate-zoom-in hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-200">
            <div className="text-sm text-gray-600 mb-2">Average Price</div>
            <div className="text-3xl font-bold text-gray-900">$1.86</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 animate-zoom-in hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-200">
            <div className="text-sm text-gray-600 mb-2">Portfolio Biomass Increase</div>
            <div className="text-3xl font-bold text-gray-900">2117 tons</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 animate-zoom-in hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-200">
            <div className="text-sm text-gray-600 mb-2">Carbon Value</div>
            <div className="text-3xl font-bold text-gray-900">$171,477</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 animate-zoom-in hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-200">
            <div className="text-sm text-gray-600 mb-2">Sales</div>
            <div className="text-3xl font-bold text-gray-900">7520</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 animate-zoom-in hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-200">
            <div className="text-sm text-gray-600 mb-2">For Sale</div>
            <div className="text-3xl font-bold text-gray-900">10%</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 animate-zoom-in hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-200">
            <div className="text-sm text-gray-600 mb-2">Volume Last 30 Days</div>
            <div className="text-3xl font-bold text-gray-900">$XX.xx</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 animate-zoom-in hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-200">
            <div className="text-sm text-gray-600 mb-2">Highest Active Offer</div>
            <div className="text-3xl font-bold text-gray-900">$XX.xx</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 animate-fade-in-up">
          <div className="bg-white rounded-2xl p-6 animate-zoom-in animate-fade-in-up">
            <h3 className="text-xl font-bold text-gray-900 mb-4">IUCN Status</h3>
            <p className="text-sm text-gray-600 mb-6">
              International Union for the Conservation of Nature, Red List
            </p>
            <div className="space-y-3">
              {iucnStatus.map((status, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 ${status.color} rounded-sm`}></div>
                    <span className="text-sm text-gray-700">{status.label}</span>
                  </div>
                  <span className="font-bold text-gray-900">{status.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 animate-zoom-in animate-fade-in-up">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Species Mix</h3>
            <p className="text-sm text-gray-600 mb-6">Percentages of Species</p>
            <div className="space-y-3">
              {speciesMix.map((species, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 ${species.color} rounded-sm`}></div>
                    <span className="text-sm text-gray-700">{species.name}</span>
                  </div>
                  <span className="font-bold text-gray-900">{species.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12 animate-fade-in-up">
          <div className="bg-white rounded-2xl p-6 text-center border-2 border-gray-200 animate-zoom-in hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-200">
            <div className="text-3xl font-bold text-gray-900 mb-1">42</div>
            <div className="text-sm text-gray-600">Species</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center border-2 border-gray-200 animate-zoom-in hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-200">
            <div className="text-3xl font-bold text-gray-900 mb-1">100</div>
            <div className="text-sm text-gray-600">Native %</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center border-2 border-gray-200 animate-zoom-in hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-200">
            <div className="text-3xl font-bold text-gray-900 mb-1">3</div>
            <div className="text-sm text-gray-600">Countries</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center border-2 border-gray-200 animate-zoom-in hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-200">
            <div className="text-3xl font-bold text-gray-900 mb-1">16</div>
            <div className="text-sm text-gray-600">Community's</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center border-2 border-gray-200 animate-zoom-in hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-200">
            <div className="text-3xl font-bold text-gray-900 mb-1">182</div>
            <div className="text-sm text-gray-600">Jobs</div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{'{Sponsor Name}'} NFTs</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in-up">
            {collectionNFTs.map((nft) => (
              <div key={nft.id} className="aspect-[3/4] rounded-2xl overflow-hidden animate-zoom-in animate-fade-in-up group">
                <img src={nft.image} alt="NFT" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
