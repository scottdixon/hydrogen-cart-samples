export default function ProductDetails({product}) {
  return (
    <>
      <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight dark:text-white mb-5 mt-5">
        {product.title}
      </h1>
      <p>
        Complement your cardio with the holistic workout you crave. Move from
        cardio to the floor with strength, stretching, yoga and more classes to
        get the most immersive fitness experience right from the comfort of
        home.
      </p>
      <button className="bg-red-700 text-center rounded-sm font-bold tracking-widest uppercase text-sm h-12 pl-8 pr-8 text-white rounded-md mt-6 mb-6">
        Add to cart
      </button>
    </>
  );
}
