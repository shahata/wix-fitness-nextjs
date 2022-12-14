import { NavBar } from '@app/components/Layout/NavBar/NavBar';

const Header = () => (
  <>
    <header className="fixed h-header bg-white z-40 w-full">
      <div className="flex justify-center max-w-full-content mx-auto gap-8 h-header items-center">
        <div className="flex flex-col justify-between items-center min-w-[300px] ml-3">
          <div className="font-lulo mb-3">ALLAN JOHNSON</div>
          <div className="text-xs tracking-widest">Personal Life Coach</div>
        </div>
        <div className="flex-grow mr-8">
          <NavBar />
        </div>
      </div>
    </header>
    <div className="h-header"></div>
  </>
);

export default Header;
