/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Offer } from './components/Offer';
import { SocialProof } from './components/SocialProof';
import { Closing } from './components/Closing';
import { StickyCTA } from './components/StickyCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-light font-sans text-brand-dark selection:bg-brand-rose selection:text-white overflow-x-hidden">
      <Hero />
      <ProblemSolution />
      <Offer />
      <SocialProof />
      <Closing />
      <StickyCTA />
    </div>
  );
}
