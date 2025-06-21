export default function Insikter() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">Insikter</h1>
      <p className="text-lg max-w-xl text-center mb-4">
        Här samlar vi insikter och reflektioner från alla som är engagerad i DiA. 
        Ta del av lärdomar och erfarenheter!
      </p>
        <p className="text-lg max-w-xl text-center mb-4">
            Har du tankar eller insikter du vill dela?

            <a href="mailto:test" className="text-blue-500 hover:underline">
                Kontakta oss!   
            </a>
        </p>
    </div>
  );
}
