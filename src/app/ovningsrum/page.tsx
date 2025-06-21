export default function Ovningsrum() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">Övningsrum</h1>
      <p className="text-lg max-w-xl text-center mb-4">
        Här hittar du övningar och material för att träna och utveckla dina kunskaper inom olika områden.
      </p>
      <ul className="list-disc list-inside text-left max-w-xl">
        <li>Praktiska övningar och case</li>
        <li>Material för självstudier</li>
        <li>Tips för fortsatt utveckling</li>
      </ul>
    </div>
  );
}
