import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { UserPlus, Search, MessageCircle, GraduationCap } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Create Your Account',
      description: 'Sign up as a student or teacher in just a few clicks. Tell us about yourself and what you want to learn or teach.',
      number: '01',
    },
    {
      icon: Search,
      title: 'Find Your Match',
      description: 'Browse through our verified teachers or wait for students to find you. Filter by subject, rating, and experience.',
      number: '02',
    },
    {
      icon: MessageCircle,
      title: 'Connect & Communicate',
      description: 'Send connection requests and start chatting. Discuss your learning goals and schedule your first session.',
      number: '03',
    },
    {
      icon: GraduationCap,
      title: 'Start Learning',
      description: 'Begin your educational journey with personalized lessons tailored to your needs and learning style.',
      number: '04',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">How LearnLink Works</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started with LearnLink is simple. Follow these four easy steps to begin your learning journey.
          </p>
        </motion.div>

        <div className="space-y-12 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-12 gap-6 p-6 md:p-8">
                    <div className="md:col-span-2 flex items-center justify-center">
                      <div className="text-6xl font-bold text-primary/20">{step.number}</div>
                    </div>
                    <div className="md:col-span-2 flex items-center justify-center">
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                        <step.icon className="h-10 w-10 text-primary" />
                      </div>
                    </div>
                    <div className="md:col-span-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-primary-foreground"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of students and teachers already using LearnLink to achieve their educational goals.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/signup">Create Your Free Account</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;
