"use client";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { createCheckoutSession } from "@/lib/stripe";
import { api } from "@/trpc/react";
import { CreditCardIcon, Info } from "lucide-react";
import React from "react";

const BillingPage = () => {
  const { data: user } = api.project.getMyCredits.useQuery();
  const [creditsToBuy, setCreditsToBuy] = React.useState<number[]>([100]);
  const creditsToBuyAmmount = creditsToBuy[0]!;
  const price = (creditsToBuyAmmount / 50).toFixed(2);
  const { data: paymentHistory } = api.project.getPaymentHistory.useQuery();
  return (
    <div>
      <h1 className="text-xl font-semibold">Billing</h1>
      <div className="h-2"></div>
      <p className="text-sm text-gray-600">
        You have {user?.credits} credits left.
      </p>
      <div className="h-2"></div>
      <div className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-blue-700">
        <div className="flex items-center gap-2">
          <Info className="size-4" />
          <p className="text-sm">
            Each credit allows you to index 1 file in a repository.
          </p>
        </div>
        <p className="text-sm">
          E.g. If your project has 100 files, you will need 100 credits to index
          it.
        </p>
      </div>
      <div className="h-4"></div>
      <Slider
        defaultValue={[100]}
        value={creditsToBuy}
        onValueChange={(value) => setCreditsToBuy(value)}
        max={1000}
        step={10}
        min={10}
      />
      <div className="h-4"></div>
      <Button
        onClick={() => {
          createCheckoutSession(creditsToBuyAmmount);
        }}
      >
        Buy {creditsToBuyAmmount} credits for ${price}
      </Button>
      <div className="h-4"></div>

      {/* user payment history */}
      <h1 className="text-xl font-semibold">Payment History</h1>
      <div className="h-4"></div>
      <ul className="divide-y divide-gray-200">
        {paymentHistory?.map((payment) => (
          <li
            key={payment.id}
            className="flex items-center justify-between gap-x-6 rounded-xl border px-4 py-3 shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-green-200 p-2 text-green-600">
                <CreditCardIcon className="size-6" />
              </div>
              <div>
                <h1 className="text-lg font-bold">Credits Added</h1>
                <span className="text-sm text-gray-500">
                  {payment.createdAt.toLocaleDateString()}
                </span>
              </div>
            </div>

            <div>
              <h1 className="flex items-center text-lg font-bold text-[#4c9464]">
                + {payment.credits} credits
              </h1>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BillingPage;
