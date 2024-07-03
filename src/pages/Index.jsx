import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useQuery } from "@tanstack/react-query";

const Index = () => {
  const { data: featuredProducts, isLoading: isLoadingFeatured } = useQuery({
    queryKey: ["featuredProducts"],
    queryFn: fetchFeaturedProducts,
  });

  const { data: newArrivals, isLoading: isLoadingNewArrivals } = useQuery({
    queryKey: ["newArrivals"],
    queryFn: fetchNewArrivals,
  });

  const { data: bestSellers, isLoading: isLoadingBestSellers } = useQuery({
    queryKey: ["bestSellers"],
    queryFn: fetchBestSellers,
  });

  return (
    <div className="space-y-8">
      <HeroSection />
      <Section title="Featured Products" isLoading={isLoadingFeatured} products={featuredProducts} />
      <Section title="New Arrivals" isLoading={isLoadingNewArrivals} products={newArrivals} />
      <Section title="Best Sellers" isLoading={isLoadingBestSellers} products={bestSellers} />
    </div>
  );
};

const HeroSection = () => (
  <div className="relative w-full h-96 bg-gray-200">
    <img src="/placeholder.svg" alt="Hero" className="object-cover w-full h-full" />
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <Button size="lg" variant="primary">Shop Now</Button>
    </div>
  </div>
);

const Section = ({ title, isLoading, products }) => (
  <div>
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {isLoading ? (
      <p>Loading...</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <img src="/placeholder.svg" alt={product.name} className="object-cover w-full h-48" />
            </CardHeader>
            <CardContent>
              <CardTitle>{product.name}</CardTitle>
              <p>${product.price}</p>
            </CardContent>
            <CardFooter>
              <Button variant="secondary">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    )}
  </div>
);

const fetchFeaturedProducts = async () => {
  // Replace with actual API call
  return [
    { id: 1, name: "Dress 1", price: 49.99 },
    { id: 2, name: "Dress 2", price: 59.99 },
    { id: 3, name: "Dress 3", price: 69.99 },
  ];
};

const fetchNewArrivals = async () => {
  // Replace with actual API call
  return [
    { id: 4, name: "Dress 4", price: 79.99 },
    { id: 5, name: "Dress 5", price: 89.99 },
    { id: 6, name: "Dress 6", price: 99.99 },
  ];
};

const fetchBestSellers = async () => {
  // Replace with actual API call
  return [
    { id: 7, name: "Dress 7", price: 109.99 },
    { id: 8, name: "Dress 8", price: 119.99 },
    { id: 9, name: "Dress 9", price: 129.99 },
  ];
};

export default Index;