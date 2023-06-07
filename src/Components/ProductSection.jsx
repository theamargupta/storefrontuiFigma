"use client";

import { SfIconFavorite, SfIconSell } from "@storefront-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useCounter } from "react-use";

export function ProductCardHorizontal({ product }) {
  const inputId = 1;
  const min = 1;
  const max = 10;
  const [value, { inc, dec, set }] = useCounter(min);

  function handleOnChange(event) {
    const { value: currentValue } = event.target;
    const nextValue = parseFloat(currentValue);
    set(Number(clamp(nextValue, min, max)));
  }

  return (
    <div className="relative flex border-b-[1px] border-neutral-200 hover:shadow-lg min-w-[320px] max-w-[640px] p-4">
      <div className="relative overflow-hidden rounded-md w-[100px] sm:w-[176px]">
        <Link href={`/product/${product.id}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
            src={"/watch.png"}
            alt=""
            width={300}
            height={300}
            className="w-full h-auto border rounded-md border-neutral-200"
          />
        </Link>
        <div className="absolute bottom-0 right-0 text-white bg-primary-100 p-1  text-xs font-medium rounded-full mr-2 mb-2 border border-primary-700">
          <SfIconFavorite size="sm" className="text-primary-700" />
        </div>
      </div>
      <div className="flex flex-col pl-4 min-w-[180px] flex-1">
        <Link
          href={`/product/${product.id}`}
          variant="secondary"
          className="no-underline typography-text-sm sm:typography-text-lg"
        >
          {product.name}
        </Link>
        <div className="my-2 sm:mb-0">
          <ul className="text-xs font-normal leading-5 sm:typography-text-sm text-neutral-700">
            <li>{product?.desc}</li>
          </ul>
        </div>
        <div className="items-center sm:mt-auto sm:flex">
          <span className="font-bold typography-text-sm sm:typography-text-lg">
            ${product.price}
          </span>
        </div>
      </div>
    </div>
  );
}
