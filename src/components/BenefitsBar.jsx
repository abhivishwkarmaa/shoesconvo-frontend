import { benefits } from '../data/siteData.js';
import { PackageIcon, PaymentIcon, ReturnsIcon, SupportIcon } from './Icons.jsx';

const benefitIcons = {
  package: PackageIcon,
  returns: ReturnsIcon,
  payment: PaymentIcon,
  support: SupportIcon,
};

export function BenefitsBar() {
  return (
    <section className="konvo-container py-8">
      <div className="grid border-y border-black/10 md:grid-cols-2 xl:grid-cols-4">
        {benefits.map((benefit, index) => {
          const Icon = benefitIcons[benefit.icon];

          return (
            <div
              key={benefit.id}
              className={`flex min-h-[90px] items-center gap-5 px-6 py-5 ${
                index > 0 ? 'xl:border-l xl:border-black/10' : ''
              }`}
            >
              <Icon className="size-[46px] shrink-0 text-brand-red" />
              <p className="text-[15px] leading-5 text-brand-muted">
                <span className="block font-bold text-brand-text">{benefit.title}</span>
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
