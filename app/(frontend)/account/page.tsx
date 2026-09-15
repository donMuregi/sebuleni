import { getPayload } from "payload";
import configPromise from "@/payload.config";
import { headers } from "next/headers";
import AuthContainer from "@/components/auth/AuthContainer";
import DashboardTabs from "@/components/account/DashboardTabs";

export default async function Account() {
  const payload = await getPayload({ config: configPromise });
  const reqHeaders = await headers();
  const { user } = await payload.auth({ headers: reqHeaders });

  let userOrders: any[] = [];
  if (user) {
    const { docs } = await payload.find({
      collection: 'orders',
      where: {
        user: {
          equals: user.id,
        },
      },
      sort: '-createdAt', // newest first
    });
    userOrders = docs;
  }

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-cream)]">
      <section className="py-16 text-center bg-[var(--color-sand)] border-b border-black/5">
        <h1 className="font-serif text-4xl text-[var(--color-deepbrown)]">
          {user ? "My Dashboard" : "My Account"}
        </h1>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4 w-full">
        {user ? (
          // Authenticated Dashboard View
          <DashboardTabs user={user} orders={userOrders} />
        ) : (
          // Unauthenticated Auth View
          <AuthContainer />
        )}
      </section>
    </div>
  );
}
