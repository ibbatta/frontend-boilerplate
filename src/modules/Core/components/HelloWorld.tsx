function HelloWorld() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-8 bg-slate-300">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="font-thin text-4xl text-slate-900">Hello World!</h1>
        <h2 className="font-bold uppercase text-slate-600">SPA Boilerplate</h2>
      </div>
      <button
        className="block px-4 py-2 border-solid border-slate-900 border-2 rounded bg-slate-100"
        onClick={() => alert("click")}
      >
        Set welcome message
      </button>
    </div>
  );
}

export default HelloWorld;
