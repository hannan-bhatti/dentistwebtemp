import { servicesData as mockServices } from '@/lib/mockData';
import { getSanityData } from '@/lib/sanity';
import { ServicesClientWrapper } from './ServicesClientWrapper';

export default async function ServicesPage() {
  const servicesData = await getSanityData('*[_type == "service"]', mockServices);

  return <ServicesClientWrapper servicesData={servicesData} />;
}
