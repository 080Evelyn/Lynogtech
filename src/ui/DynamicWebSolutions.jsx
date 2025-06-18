import design1 from "../assets/design1.png";
import design2 from "../assets/design2.png";
import design3 from "../assets/design3.png";
import serviceBg from "../assets/serviceBg.png";

const DynamicWebSolutions = () => {
  return (
    <section className="relative py-16 px-4 md:px-8 overflow-hidden bg-[#D2E3FA]">
      {/* Background Image with Opacity Overlay */}
      <div
        className="absolute w-[50%] inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${serviceBg}')`,
        }}></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main Title and Subtitle */}
        <div className="text-center mb-12 italic">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Dynamic Web Solutions
          </h2>
          <p className="text-xl md:text-2xl text-gray-600">
            Building powerful web applications that drive business growth.
          </p>
        </div>

        {/* Feature List */}
        <div className="space-y-12">
          {/* Feature 1: Post-Launch Support */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
            <div className="flex-shrink-0 mb-6 md:mb-0 text-center">
              <img
                src={design1}
                alt="Mobile App Screenshot"
                className="w-48 md:w-[400px] h-auto object-contain mx-auto"
              />
            </div>
            <div className="text-center italic md:!space-y-10 md:text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                User-Centric Design
              </h3>
              <p className="text-gray-600 leading-relaxed md:text-lg">
                We prioritize user experience in our web application designs ,
                ensuring easy navigation and accessibility. Our approach focuses
                on creating intuitive interfaces that meet user needs
                effectively.
              </p>
            </div>
          </div>

          {/* Feature 2: Custom App Design */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
            <div className="flex-shrink-0 mb-6 md:mb-0 text-center items-center">
              <img
                src={design2}
                alt="Mobile App Screenshot"
                className="w-48 md:w-[400px] h-auto object-contain mx-auto"
              />
            </div>
            <div className="text-center items-center md:!space-y-10 md:text-left">
              <h3 className="text-2xl font-bold italic text-gray-800 mb-3">
                Scalable Architecture
              </h3>
              <p className="text-gray-600 italic leading-relaxed md:text-lg">
                Our web applications are built with scalability in mind,enabling
                your business to grow without limitations. We design robust
                back-end systems that can handle increased traffic and data with
                ease.
              </p>
            </div>
          </div>

          {/* Feature 3: Cross-Platform Development */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
            <div className="flex-shrink-0 mb-6  md:mb-0 text-center">
              <img
                src={design3}
                alt="Mobile App Screenshot"
                className="w-48 md:w-[400px] h-auto object-contain mx-auto"
              />
            </div>
            <div className="text-center italic md:!space-y-10 md:text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Integration Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed md:text-lg">
                We offer seamless integration with various third-party services
                and APIs, enhancing the functionality of your web applications.
                This allows for a more cohesive user experience and operational
                efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicWebSolutions;
