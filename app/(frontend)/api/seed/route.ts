import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'

const products = [
  { slug: "safari-dress", name: "Safari Dress", price: 8500, category: 'Dress', collectionYear: "2016", featured: true },
  { slug: "sifuyo-coat", name: "Sifuyo Coat", price: 12000, category: 'Coat', collectionYear: "2020", featured: true },
  { slug: "akumu-dress", name: "Akumu Dress", price: 9500, category: 'Dress', collectionYear: "2022", featured: true },
  { slug: "ambiyo-coat", name: "Ambiyo Coat", price: 11000, category: 'Coat', collectionYear: "2014", featured: true },
  { slug: "anyore-throw", name: "Anyore Throw", price: 6500, category: 'Throw', collectionYear: "2022", featured: true },
  { slug: "kadenyi-dress", name: "Kadenyi Dress", price: 8000, category: 'Dress', collectionYear: "2022", featured: true },
  { slug: "kiyangu-coat", name: "Kiyangu Coat", price: 13000, category: 'Coat', collectionYear: "2021", featured: true },
  { slug: "kibebe-dress", name: "Kibebe Dress", price: 9000, category: 'Dress', collectionYear: "2023", featured: true },
  { slug: "nyar-ngiya-coat", name: "Nyar Ngiya Coat", price: 10000, category: 'Coat', collectionYear: "2019", featured: true }
];

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise })
    
    let created = 0;
    for (const product of products) {
      const existing = await payload.find({
        collection: 'products',
        where: { slug: { equals: product.slug } }
      })
      
      if (existing.totalDocs === 0) {
        await payload.create({
          collection: 'products',
          data: {
            name: product.name,
            slug: product.slug,
            category: product.category as 'Dress' | 'Coat' | 'Throw' | 'Other',
            collectionYear: product.collectionYear,
            price: product.price,
            featured: product.featured,
            inStock: true,
          },
        })
        created++
      }
    }
    return NextResponse.json({ success: true, message: `Created ${created} products` })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
