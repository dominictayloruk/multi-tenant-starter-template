import { StackHandler } from '@stackframe/stack';
import { stackServerApp } from '@/stack';

export default function Handler() {
  return <StackHandler app={stackServerApp} />;
}
