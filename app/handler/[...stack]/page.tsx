import { StackHandler } from '@stackframe/stack';
import { stackServerApp } from '@/stack';

export default function Handler(props: {
  params: Promise<{ stack: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <StackHandler app={stackServerApp} routeProps={props} fullPage={true} />
  );
}
