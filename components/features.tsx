import { 
    Ruler, 
    Sparkles, 
    Palette, 
    ShoppingBag 
  } from "lucide-react";
  
  const features = [
    {
      name: "Body Type Analysis",
      description: "Take our comprehensive quiz to discover your unique body type.",
      icon: Ruler,
    },
    {
      name: "Personalized Recommendations",
      description: "Get clothing suggestions that perfectly complement your shape.",
      icon: Sparkles,
    },
    {
      name: "Style Guide",
      description: "Learn about colors, patterns, and cuts that work best for you.",
      icon: Palette,
    },
    {
      name: "Shopping Tips",
      description: "Expert advice on how to shop for your body type.",
      icon: ShoppingBag,
    },
  ];
  
  export default function Features() {
    return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">
              Discover Your Style
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to dress with confidence
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our comprehensive tools and guides help you understand your body type
              and find the perfect clothes that make you look and feel amazing.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <dt className="text-xl font-semibold leading-7">
                    {feature.name}
                  </dt>
                  <dd className="mt-1 text-base leading-7 text-muted-foreground">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    );
  }