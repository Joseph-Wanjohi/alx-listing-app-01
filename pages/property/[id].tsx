import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";


export default function PropertyPage() {
    const router = useRouter();
    // Ensure the router is ready before accessing query parameters
    const { id } = router.query;
    
    // Find the property by ID
    const property = PROPERTYLISTINGSAMPLE.find((property) => property.id === id);
    
    // If property is not found, you can handle it accordingly
    if (!property) return <p>Property not found</p>;
    
    return (
        <PropertyDetail property={property} />
    );
}