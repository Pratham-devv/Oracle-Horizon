import { GraduationCap, Moon } from "lucide-react"
const NavBar = () => {
  return (
      <nav className="sticky top-0 z-50 glass-study-panel px-8 py-5 flex justify-between items-center border-x-0 border-t-0">
        <div className="flex items-center gap-4">
          <Moon className="text-gold-main fill-gold-main" size={20} />
          <h1 className="font-['Cinzel'] font-black tracking-[0.5em] text-gold-main text-xl">ACADEMY</h1>
        </div>
        <div className="hidden md:flex gap-8 font-['Cinzel'] text-[10px] tracking-widest text-gold-bright/60">
        <a href="">Courses</a>
         <a href="">CURRICULUM</a>
         <a href="">InstructorsY</a>
         <a href="">Testimonials</a>
        </div>
        <div className="bg-gold-main/10 border border-gold-main/30 px-4 py-2 rounded-full flex items-center gap-2">
           <GraduationCap size={16} className="text-gold-main" />
           <span className="text-[10px] font-bold tracking-widest text-gold-main uppercase">Student Portal</span>
        </div>
      </nav>
  )
}

export default NavBar
