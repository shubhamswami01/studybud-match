import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <Card className="mb-6">
            <CardContent className="pt-6 space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-3">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using LearnLink, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to these terms, please do not use our service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">2. Use of Service</h2>
                <p className="text-muted-foreground mb-3">
                  You agree to use LearnLink only for lawful purposes and in accordance with these Terms. You agree not to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Use the service in any way that violates applicable laws</li>
                  <li>Impersonate or attempt to impersonate another user</li>
                  <li>Engage in any conduct that restricts or inhibits anyone's use of the service</li>
                  <li>Use the service to transmit any advertising or promotional material</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">3. User Accounts</h2>
                <p className="text-muted-foreground">
                  When you create an account with us, you must provide accurate, complete, and current information. 
                  You are responsible for safeguarding your password and for all activities that occur under your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">4. Teacher Verification</h2>
                <p className="text-muted-foreground">
                  Teachers on LearnLink must provide accurate information about their qualifications and experience. 
                  LearnLink reserves the right to verify credentials and remove accounts that provide false information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">5. Content</h2>
                <p className="text-muted-foreground">
                  Users are responsible for the content they post on LearnLink. You retain all rights to your content, 
                  but grant LearnLink a license to use, display, and distribute your content on the platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">6. Payment and Fees</h2>
                <p className="text-muted-foreground">
                  Teachers and students may agree on payment terms directly. LearnLink may charge a service fee for facilitating connections. 
                  All fees are non-refundable unless otherwise stated.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">7. Termination</h2>
                <p className="text-muted-foreground">
                  We may terminate or suspend your account immediately, without prior notice, for any reason, 
                  including if you breach the Terms of Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">8. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  LearnLink shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
                  resulting from your use of or inability to use the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">9. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. We will notify users of any material changes. 
                  Your continued use of the service after changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">10. Contact Information</h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms, please contact us at legal@learnlink.com
                </p>
              </section>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
