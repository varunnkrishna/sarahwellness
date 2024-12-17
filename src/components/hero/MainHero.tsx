'use client';

import { Container } from '../layout/Container';
import { Button } from '../ui/Button';

export function MainHero() {
  return (
    <div className="bg-gradient-to-r from-primary-50 to-secondary-50 py-20">
      <Container>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-6xl">
          We’ve All Felt Like Life Is Just Too Much Sometimes          </h1>
          <p className="mt-6 text-lg leading-8 text-primary-700">
          You’re not alone. Together, we can uncover your inner strength, set boundaries, and create the life you truly deserve.
            Take the first step towards better mental well-being today.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button variant="primary" size="lg">
              Start Your Journey
            </Button>
            <Button variant="accent" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
