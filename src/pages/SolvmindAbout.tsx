import SolvmindLayout from '@/components/SolvmindLayout';
import { Target, Eye, Heart, Users, MapPin, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const values = [
  {
    title: 'Innovation',
    description: 'We stay at the forefront of AI technology to deliver cutting-edge solutions that drive real business value.',
    icon: Lightbulb,
    color: 'text-primary'
  },
  {
    title: 'Pacific Focus',
    description: 'We understand the unique challenges and opportunities of businesses in Papua New Guinea and the Pacific region.',
    icon: MapPin,
    color: 'text-secondary'
  },
  {
    title: 'Partnership',
    description: 'We work closely with our clients as trusted partners, ensuring solutions fit their specific needs and culture.',
    icon: Users,
    color: 'text-primary'
  },
  {
    title: 'Excellence',
    description: 'We are committed to delivering high-quality AI solutions that exceed expectations and drive measurable results.',
    icon: Target,
    color: 'text-secondary'
  }
];

const SolvmindAbout = () => {
  return (
    <SolvmindLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-accent/30 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Solvmind AI</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Pioneering AI solutions for the Pacific region, empowering businesses with intelligent technology that understands local needs.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To democratize access to advanced AI technology across Papua New Guinea and the Pacific region, 
                  helping businesses of all sizes harness the power of artificial intelligence to improve efficiency, 
                  enhance customer experiences, and drive sustainable growth.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-secondary/10 to-secondary/5">
                    <Eye className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the leading AI solutions provider in the Pacific, creating a future where every business 
                  can leverage intelligent technology to solve complex challenges, improve lives, and contribute 
                  to the economic development of our region.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Story</h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Solvmind AI was founded with a clear purpose: to bridge the AI gap in Papua New Guinea and the Pacific region. 
              We recognized that while AI technology was transforming businesses globally, many organizations in our region 
              were missing out on these opportunities due to lack of local expertise and culturally relevant solutions.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Our team combines deep AI expertise with intimate knowledge of the Pacific business landscape. We understand 
              the unique challenges faced by businesses in our region – from limited technical infrastructure to diverse 
              cultural contexts – and we design our solutions accordingly.
            </p>
            
            <p className="text-lg leading-relaxed">
              Today, we're proud to be helping banks, telecommunications companies, government agencies, and businesses 
              across the Pacific harness the power of AI to improve their operations, better serve their customers, 
              and drive growth in their communities.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and every solution we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 ${value.color}`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Why Choose Solvmind AI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">Local Expertise</div>
              <p className="text-white/90">Deep understanding of Pacific business culture and challenges</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">Proven Results</div>
              <p className="text-white/90">50+ successful AI implementations across the region</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">Ongoing Support</div>
              <p className="text-white/90">24/7 support and continuous optimization of your AI solutions</p>
            </div>
          </div>
        </div>
      </section>
    </SolvmindLayout>
  );
};

export default SolvmindAbout;