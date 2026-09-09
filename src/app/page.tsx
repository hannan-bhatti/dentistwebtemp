import { heroData as mockHero, trustSignals as mockTrust, servicesData as mockServices, doctorsData as mockDocs } from '@/lib/mockData';
import { getSanityData } from '@/lib/sanity';
import { HomeClientWrapper } from './HomeClientWrapper';

export default async function Home() {
  // Fetch live data from Sanity CMS, fallback to mock data if not yet configured
  const heroData = await getSanityData('*[_type == "hero"][0]', mockHero);
  const trustSignals = await getSanityData('*[_type == "trustSignal"]', mockTrust);
  const servicesData = await getSanityData('*[_type == "service"]', mockServices);
  const doctorsData = await getSanityData('*[_type == "doctor"]', mockDocs);

  return <HomeClientWrapper 
            heroData={heroData} 
            trustSignals={trustSignals} 
            servicesData={servicesData} 
            doctorsData={doctorsData} 
         />;
}
