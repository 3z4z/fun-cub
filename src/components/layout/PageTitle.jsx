export default function PageTitleComponent({ title, subtitle }) {
  return (
    <header className="text-center mt-10 mb-16 px-4">
      <h1 className="text-3xl mb-3 font-bold text-primary capitalize">
        {title}
      </h1>
      {subtitle && <p className="font-medium text-neutral/75">{subtitle}</p>}
    </header>
  );
}
