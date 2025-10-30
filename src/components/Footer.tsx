export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6">
            <div className="text-2xl font-bold text-black">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="inline-block mr-2">
                <rect width="12" height="32" fill="black" rx="2"/>
                <rect x="16" y="0" width="12" height="16" fill="black" rx="2"/>
                <rect x="16" y="20" width="12" height="12" fill="black" rx="2"/>
              </svg>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=100&h=40&fit=crop"
                alt="Sustainable Goals"
                className="h-10 object-contain"
              />
              <img
                src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=100&h=40&fit=crop"
                alt="Climate Action"
                className="h-10 object-contain"
              />
            </div>
          </div>
          <div className="text-sm text-gray-600">
            © 2025 Carbon Marketplace. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
