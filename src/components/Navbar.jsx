import FFMI_Logo from "../assets/FFMI_Logo.png";

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 z-50 bg-slate-950/50 backdrop-blur-md border-b border-white/10 p-4">
      <div className="max-w-5xl mx-auto flex items-center gap-4">
        <img src={FFMI_Logo} alt="FFMI Tracker Logo" className="h-12 md:h-16 object-contain" /> 
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white">
            FFMI Tracker
          </h1>
          <p className="text-xs md:text-sm text-slate-400 leading-tight">
            Fat Free Mass Index Calculator & Progress Monitor
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;