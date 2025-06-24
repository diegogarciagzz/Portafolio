export default function Extras() {
  const imageList = [
    "FOTO1.jpg", "FOTO2.jpg", "FOTO3.jpg", "FOTO4.jpg", "FOTO5.jpg",
    "FOTO6.jpg", "FOTO7.jpg", "FOTO9.jpg", "FOTO10.jpg", "FOTO11.jpg",
    "FOTO12.jpg", "FOTO13.jpg", "FOTO14.jpg", "FOTO15.JPG", "foto16.jpeg", "foto17.jpeg"
  ];

  return (
          <div id="extras" className="px-4 py-6">

      <h2 className="text-3xl font-bold text-cyan-400 mb-2 text-center">
        Achievements and Student Life
      </h2>
      <p className="text-white text-sm sm:text-base mb-6 text-center max-w-3xl mx-auto">
        I’m passionate about chess — I’ve competed in national tournaments and consider myself a semi-professional player. I also enjoy playing soccer and staying active. Beyond sports, I love getting involved in student groups and university communities. I'm a highly social and collaborative person who thrives in dynamic and team-oriented environments.
      </p>

      {/* Nueva Galería sin huecos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {imageList.map((img) => (
          <div
            key={img}
            className="w-full h-64 overflow-hidden rounded-lg shadow-md bg-gray-900"
          >
            <img
              src={`/images/extras/${img}`}
              alt={img}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

