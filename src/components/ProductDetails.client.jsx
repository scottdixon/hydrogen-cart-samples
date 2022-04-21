import {
  AddToCartButton,
  ProductProvider,
  useProduct,
} from '@shopify/hydrogen/client';

export default function ProductDetails({product}) {
  return (
    <>
      <ProductProvider data={product}>
        <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight dark:text-white mb-5 mt-5">
          {product.title}
        </h1>
        <p>
          Complement your cardio with the holistic workout you crave. Move from
          cardio to the floor with strength, stretching, yoga and more classes
          to get the most immersive fitness experience right from the comfort of
          home.
        </p>
        <ProductOptions />
        <AddToCartButton className="bg-red-700 text-center rounded-sm font-bold tracking-widest uppercase text-sm h-12 pl-8 pr-8 text-white rounded-md mt-6 mb-6">
          Add to cart
        </AddToCartButton>
      </ProductProvider>
    </>
  );
}

function ProductOptions() {
  const {options, setSelectedOption, selectedOptions} = useProduct();

  if (options.length === 1) return;

  return (
    <>
      {options.map(({name, values}) => {
        return (
          <fieldset key={name} className="mt-8">
            <legend className="mb-4 text-xl font-medium text-gray-900">
              {name}
            </legend>

            <div className="flex items-center flex-wrap gap-4">
              {values.length > 5 ? (
                <select
                  onChange={(e) => setSelectedOption(name, e.target.value)}
                  className="pt-2 pb-2 block  border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  {values.map((value) => {
                    const id = `option-${name}-${value}`;
                    return <option key={id}>{value}</option>;
                  })}
                </select>
              ) : (
                <>
                  {values.map((value) => {
                    const checked = selectedOptions[name] === value;
                    const id = `option-${name}-${value}`;

                    return (
                      <label key={id} htmlFor={id}>
                        <input
                          className="sr-only"
                          type="radio"
                          id={id}
                          name={`option[${name}]`}
                          value={value}
                          checked={checked}
                          onChange={() => setSelectedOption(name, value)}
                        />
                        <div
                          className={`p-2 border cursor-pointer rounded text-sm md:text-md ${
                            checked ? 'bg-gray-900 text-white' : 'text-gray-900'
                          }`}
                        >
                          {value}
                        </div>
                      </label>
                    );
                  })}
                </>
              )}
            </div>
          </fieldset>
        );
      })}
    </>
  );
}
