import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { GlowingEffect } from '@/components/ui/glowing-effect';

export function Hero(props: {
  capsuleText: string;
  capsuleLink: string;
  title: string;
  subtitle: string;
  credits?: React.ReactNode;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  secondaryCtaIcon?: React.ReactNode;
}) {
  return (
    <section className="space-y-6 py-32 md:py-48 lg:py-52">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Link
          href={props.capsuleLink}
          className="bg-muted rounded-2xl px-4 py-1.5 text-sm font-medium"
          target="_blank"
        >
          {props.capsuleText}
        </Link>
        <h1 className="font-heading text-3xl sm:text-5xl lg:text-7xl">
          {props.title}
        </h1>
        <p className="text-muted-foreground max-w-[42rem] leading-normal sm:text-xl sm:leading-8">
          {props.subtitle}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={props.primaryCtaLink}
            className={cn(buttonVariants({ size: 'lg' }), 'relative')}
          >
            <GlowingEffect
              variant="default"
              glow={true}
              disabled={false}
              blur={3}
              spread={40}
              borderWidth={6}
              proximity={10}
              inactiveZone={0.01}
            />
            {props.primaryCtaText}
          </Link>

          <Link
            href={props.secondaryCtaLink}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
          >
            {props.secondaryCtaIcon && (
              <span className="mr-2">{props.secondaryCtaIcon}</span>
            )}
            {props.secondaryCtaText}
          </Link>
        </div>

        {props.credits && (
          <p className="text-muted-foreground mt-4 text-sm">{props.credits}</p>
        )}
      </div>
    </section>
  );
}
