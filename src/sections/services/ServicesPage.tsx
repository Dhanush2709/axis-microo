import { CapabilitiesTable } from "@/sections/services/CapabilitiesTable";
import { ServicesHero } from "@/sections/services/ServicesHero";
import { ServicesList } from "@/sections/services/ServicesList";

export function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <CapabilitiesTable />
    </>
  );
}

