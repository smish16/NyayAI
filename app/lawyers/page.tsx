'use client'

import { useState, useEffect, useCallback } from 'react'
import { Search, MapPin, Star, Phone, Briefcase, MapIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface Lawyer {
  id: number
  name: string
  specialization: string
  rating: number
  location: string
  address: string
  phone: string
  firm: string
}

export default function LawyersPage() {
  const [lawyers, setLawyers] = useState<Lawyer[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchLoc, setSearchLoc] = useState('')
  const [spec, setSpec] = useState('all')

  const fetchLawyers = useCallback(async () => {
    setIsLoading(true)
    try {
      const url = new URL('/api/lawyers', window.location.origin)
      if (searchLoc) url.searchParams.append('location', searchLoc)
      if (spec && spec !== 'all') url.searchParams.append('specialization', spec)

      const res = await fetch(url)
      const data = await res.json()
      setLawyers(data.lawyers || [])
    } catch (error) {
      console.error('Failed to fetch lawyers', error)
    } finally {
      setIsLoading(false)
    }
  }, [searchLoc, spec])

  useEffect(() => {
    const debounce = setTimeout(() => {
      fetchLawyers()
    }, 500)
    return () => clearTimeout(debounce)
  }, [fetchLawyers])

  const toTitleCase = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

  return (
    <div className="container mx-auto max-w-6xl p-4 py-8 min-h-[80vh]">
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Find Legal Help Near You</h1>
        <p className="text-muted-foreground">Discover verified lawyers, law firms, and legal advisors matching your needs.</p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-3xl pt-4">
          <div className="relative flex-1">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Enter city, area, or pincode" 
              className="pl-9"
              value={searchLoc}
              onChange={(e) => setSearchLoc(e.target.value)}
            />
          </div>
          <Select value={spec} onValueChange={setSpec}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Specialization" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any Specialization</SelectItem>
              <SelectItem value="civil">Civil Law</SelectItem>
              <SelectItem value="criminal">Criminal Law</SelectItem>
              <SelectItem value="corporate">Corporate Law</SelectItem>
              <SelectItem value="family">Family Law</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {isLoading ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="rounded-xl border bg-card p-6 space-y-4 animate-pulse">
              <div className="h-6 w-3/4 bg-muted rounded"></div>
              <div className="h-4 w-1/2 bg-muted rounded"></div>
              <div className="space-y-2 pt-4">
                <div className="h-4 w-full bg-muted rounded"></div>
                <div className="h-4 w-5/6 bg-muted rounded"></div>
              </div>
              <div className="pt-4 flex gap-2">
                <div className="h-9 w-1/2 bg-muted rounded"></div>
                <div className="h-9 w-1/2 bg-muted rounded"></div>
              </div>
            </div>
          ))}
        </div>
      ) : lawyers.length === 0 ? (
        <div className="text-center py-24 rounded-xl border border-dashed">
          <Search className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium">No results found</h3>
          <p className="text-muted-foreground">Try adjusting your location or specialization filters.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lawyers.map(lawyer => (
            <div key={lawyer.id} className="rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg line-clamp-1">{lawyer.name}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <Briefcase className="w-3 h-3" />
                      {lawyer.firm}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-500 px-2 py-1 rounded text-xs font-medium">
                    <Star className="w-3 h-3 fill-current" />
                    {lawyer.rating}
                  </div>
                </div>

                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-secondary text-secondary-foreground mb-4">
                  {toTitleCase(lawyer.specialization)} Law
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-foreground/70" />
                    <span className="line-clamp-2">{lawyer.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-4 h-4 shrink-0 text-foreground/70" />
                    <span>{lawyer.phone}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border-t border-border/50 bg-muted/20 flex gap-2">
                <Button className="flex-1 gap-2" variant="default" size="sm">
                  <Phone className="w-4 h-4" />
                  Contact
                </Button>
                <Button className="flex-1 gap-2 border-primary/20 hover:bg-primary/5" variant="outline" size="sm">
                  <MapIcon className="w-4 h-4" />
                  Map View
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
