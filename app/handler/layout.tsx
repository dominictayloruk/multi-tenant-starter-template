import HandlerHeader from '@/components/handler-header';

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <HandlerHeader />
      <div className="grow">{props.children}</div>
    </div>
  );
}
