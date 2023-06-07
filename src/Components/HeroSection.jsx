import Image from "next/image";
import { ProductCardHorizontal } from "./ProductSection";

export default function HeroSection() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10">
          {/* Profile Heading Sidebar */}
          <div className="flex">
            <div className="w-1/4 shadow-md h-[80vh]">
              <p className="text-xl font-semibold p-5">Profile</p>
              <hr />
              <div className="mt-6">
                {/* Sidebar Options */}
                <ul className="space-y-4">
                  {[
                    "Account Settings",
                    "Payment",
                    "Saved",
                    " Order History",
                  ].map((data) => (
                    <li
                      key={data}
                      role="button"
                      className="p-4 hover:bg-primary-100 hover:font-semibold hover:text-primary-800 flex"
                    >
                      <Image
                        src={"Prefix_ Icon.svg"}
                        alt=""
                        width={22}
                        height={22}
                        className="mr-2 fill-primary-700"
                      />
                      <a href="#" className="text-lg">
                        {data}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-3/4 pl-10">
              <h2 className="text-2xl font-bold pb-5">Saved</h2>
              <hr />
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-8">
                <ProductCardHorizontal
                  product={{
                    id: "cks6m2nq80d9b0c43o5yaqi27",
                    name: "Smartwatch Fitness Tracker",
                    desc:"Blood pressure monitor • Activity tracker • Phone call • Heart rate monitor",
                    price: 600,
                    currentInventory: 15,
                    image: "https://i.ibb.co/VCX39vM/chair6.png",
                  }}
                />
                <ProductCardHorizontal
                  product={{
                    id: "cks6m2nq80d9b0c43o5yaqsdfi27",
                    name: "Smartwatch Fitness Tracker",
                    desc:"Blood pressure monitor • Activity tracker • Phone call • Heart rate monitor",
                    price: 600,
                    currentInventory: 15,
                    image: "https://i.ibb.co/VCX39vM/chair6.png",
                  }}
                />
                  <ProductCardHorizontal
                  product={{
                    id: "cks6m2nq8xdf0d9b0c43o5yaqsdfi27",
                    name: "Smartwatch Fitness Tracker",
                    desc:"Blood pressure monitor • Activity tracker • Phone call • Heart rate monitor",
                    price: 600,
                    currentInventory: 15,
                    image: "https://i.ibb.co/VCX39vM/chair6.png",
                  }}
                />  <ProductCardHorizontal
                product={{
                  id: "cks6m2nq8xdf0sdafd9b0c43o5yaqsdfi27",
                  name: "Smartwatch Fitness Tracker",
                  desc:"Blood pressure monitor • Activity tracker • Phone call • Heart rate monitor",
                  price: 600,
                  currentInventory: 15,
                  image: "https://i.ibb.co/VCX39vM/chair6.png",
                }}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
