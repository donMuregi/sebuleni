import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getPayload } from "payload";
import configPromise from "@/payload.config";
import { notFound } from "next/navigation";
import { RichText } from "@payloadcms/richtext-lexical/react";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const payload = await getPayload({ config: configPromise });
  const { docs } = await payload.find({
    collection: 'blogs',
    where: { slug: { equals: slug } },
    depth: 2,
    limit: 1,
  });
  
  const post = docs[0];

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[var(--color-cream)]">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-[var(--color-deepbrown)] mb-4">Blog Post Not Found</h1>
          <Link href="/styledrop" className="text-[var(--color-terracotta)] flex items-center gap-2 justify-center font-semibold hover:underline"><ArrowLeft size={16} /> Back to Style Drop</Link>
        </div>
      </div>
    );
  }

  const imageUrl = post.image && typeof post.image === 'object' && post.image.url ? post.image.url : null;
  const publishedDate = post.publishedDate ? new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '';

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-cream)]">
      <div className="max-w-4xl mx-auto px-4 py-16 w-full">
        <Link href="/styledrop" className="inline-flex items-center gap-2 text-[var(--color-deepbrown)]/70 hover:text-[var(--color-terracotta)] transition-colors text-sm font-semibold uppercase tracking-wide mb-12">
          <ArrowLeft size={16} /> Back to Style Drop
        </Link>
        
        <article className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-[var(--color-sand)]">
          <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-deepbrown)] mb-4 leading-tight">
            {post.title}
          </h1>
          
          <div className="text-[var(--color-terracotta)] font-semibold text-sm uppercase tracking-widest mb-10">
            {publishedDate}
          </div>

          {imageUrl && (
            <div className="aspect-video w-full rounded-xl overflow-hidden mb-12">
              <img src={imageUrl} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}

          <div className="prose prose-stone prose-lg max-w-none text-[var(--color-deepbrown)]/80 leading-relaxed">
            {post.content && typeof post.content === 'object' ? (
              <RichText data={post.content as any} />
            ) : (
              <p>Content is unavailable.</p>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
