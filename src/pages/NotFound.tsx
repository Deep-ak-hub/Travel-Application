import Button from "../components/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center">
      <p className="text-8xl font-bold text-border-dark mb-4 select-none">404</p>
      <h1 className="text-2xl font-bold text-text mb-3">Page not found</h1>
      <p className="text-text-muted max-w-md mb-8">
        The trail you're looking for doesn't exist — it may have moved or been
        removed. Head back to base camp and try again.
      </p>
      <Button variant="primary" href="/">
        Back to Home
      </Button>
    </div>
  );
}