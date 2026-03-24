import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const location = searchParams.get('location')?.toLowerCase() || ''
  const spec = searchParams.get('specialization')?.toLowerCase() || ''

  // Delay to simulate network
  await new Promise(resolve => setTimeout(resolve, 800))

  const lawyers = [
    { id: 1, name: 'Adv. Ramesh Kumar', specialization: 'civil', rating: 4.8, location: 'Mumbai', address: '12, Fort Area, Mumbai', phone: '+91 9876543210', firm: 'Independent' },
    { id: 2, name: 'Singh & Associates', specialization: 'corporate', rating: 4.5, location: 'Delhi', address: 'Connaught Place, Delhi', phone: '+91 9876543211', firm: 'Singh & Associates' },
    { id: 3, name: 'Adv. Priya Sharma', specialization: 'family', rating: 4.9, location: 'Bangalore', address: 'Indiranagar, Bangalore', phone: '+91 9876543212', firm: 'Independent' },
    { id: 4, name: 'Verma Legal', specialization: 'criminal', rating: 4.6, location: 'Mumbai', address: 'Andheri West, Mumbai', phone: '+91 9876543213', firm: 'Verma Legal' },
    { id: 5, name: 'Adv. Anil Desai', specialization: 'civil', rating: 4.2, location: 'Pune', address: 'Shivaji Nagar, Pune', phone: '+91 9876543214', firm: 'Independent' },
    { id: 6, name: 'Reddy Law Firm', specialization: 'corporate', rating: 4.7, location: 'Hyderabad', address: 'Banjara Hills, Hyderabad', phone: '+91 9876543215', firm: 'Reddy Law Firm' }
  ]

  const filtered = lawyers.filter(l => {
    const matchLoc = location ? l.location.toLowerCase().includes(location) || l.address.toLowerCase().includes(location) : true
    const matchSpec = spec && spec !== 'all' ? l.specialization === spec : true
    return matchLoc && matchSpec
  })

  return NextResponse.json({ lawyers: filtered })
}
