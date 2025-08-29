import { Logo } from "@/components/logo";

export function Header() {
  return (
    <header className="py-4 px-4 sm:px-6 md:px-8 border-b">
      <div className="mx-auto flex items-center justify-center">
        <Logo />
      </div>
    </header>
  );
}
