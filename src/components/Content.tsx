const Content = () => {
  return ( 
    <div className="mx-auto max-w-screen-xl my-20">
      <h2 className="text-2xl font-semibold">Tailwind UI Components</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-4 gap-4">
        <div className="border border-gray-200 p-2 rounded-lg">
          <img src="https://picsum.photos/400/300?grayscale" alt="" className="w-full rounded-lg h-50 object-cover" />

          <div className="mt-2 p-2 mb-2">
            <h2 className="text-2xl font-semibold">Card</h2>
            <p className="text-gray-400">9 Components</p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Content;