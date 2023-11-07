const Faq = () => {
  return (
    <div className="container flex flex-col px-6 py-10  space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center lg:mx-[275px]">
      <div className="w-full lg:w-1/2 lg:mt-9">
        <div className="collapse dark:bg-gray-600 dark:text-white collapse-arrow bg-base-200 my-10">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            What payment methods are accepted for subscription payments?
          </div>
          <div className="collapse-content">
            <p>
              We accept major credit cards, including Visa, MasterCard, and
              American Express, as well as PayPal for subscription payments.
            </p>
          </div>
        </div>

        <div className="collapse dark:bg-gray-600 dark:text-white collapse-arrow bg-base-200 my-10">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Can I download movies for offline viewing?
          </div>
          <div className="collapse-content">
            <p>
              Yes, you can download movies to watch offline on our mobile app.
              Look for the download icon next to the movie you want to save for
              offline viewing.
            </p>
          </div>
        </div>

        <div className="collapse dark:bg-gray-600 dark:text-white collapse-arrow bg-base-200 my-10">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Is there a limit to the number of devices I can use to access my
            account?
          </div>
          <div className="collapse-content">
            <p>
              You can stream on multiple devices, but the number may be limited
              based on your subscription plan. Please refer to your plans terms
              for more information.
            </p>
          </div>
        </div>
        <div className="collapse dark:bg-gray-600 dark:text-white collapse-arrow bg-base-200 my-10">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Are subtitles available for foreign-language films?
          </div>
          <div className="collapse-content">
            <p>
              Yes, we provide subtitles for a wide range of languages. Simply
              select your preferred subtitle language in the settings while
              watching a movie with available subtitles.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
        <img
          className="object-cover w-full h-full max-w-2xl rounded-md"
          src="https://i.ibb.co/CPhtBzf/0-fj-AGp-YGPXNRI6-Zo.png"
          alt="glasses photo"
        />
      </div>
    </div>
  );
};

export default Faq;
