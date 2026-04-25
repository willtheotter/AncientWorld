export default function LearnPage() {
  return (
    <div className="max-w-4xl mx-auto text-center py-12">
      <h1 className="text-4xl font-bold text-[#d4af37] mb-4">Discover Ancient Egypt</h1>
      <p className="text-gray-600 text-lg mb-8">
        Coming soon! Explore Egyptian history, medicine, mythology, and more.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="bg-[#f0e6d2]/50 p-6 rounded-lg">
          <div className="text-3xl mb-3">📜</div>
          <h3 className="font-bold mb-2">History Timeline</h3>
          <p className="text-sm text-gray-600">Interactive journey through Egyptian dynasties</p>
        </div>
        <div className="bg-[#f0e6d2]/50 p-6 rounded-lg">
          <div className="text-3xl mb-3">🏺</div>
          <h3 className="font-bold mb-2">Medicine & Healing</h3>
          <p className="text-sm text-gray-600">Ancient Egyptian medical practices</p>
        </div>
        <div className="bg-[#f0e6d2]/50 p-6 rounded-lg">
          <div className="text-3xl mb-3">✨</div>
          <h3 className="font-bold mb-2">Mythology</h3>
          <p className="text-sm text-gray-600">Gods, goddesses, and sacred stories</p>
        </div>
      </div>
    </div>
  )
}