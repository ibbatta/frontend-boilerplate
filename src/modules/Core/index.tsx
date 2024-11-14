function Core() {
  console.log("ENV:", import.meta.env.MODE);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-2 bg-slate-300">
      <h1 className="font-thin text-4xl text-slate-900">Hello World!</h1>
      <h2 className="font-bold uppercase text-slate-600">SPA Boilerplate</h2>
    </div>
  );
}

export default Core;
